import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

/**
 * Event Editing Form
 *
 * @author Jeff Risberg
 * @since May 2017
 */

function EventFormComponent() {
   const { id } = useParams();
   const navigate = useNavigate();
   const [event, setEvent] = useState(null);
   const [loading, setLoading] = useState(true);
   const [formData, setFormData] = useState({
      text: '',
      time: ''
   });

   useEffect(() => {
      if (id) {
         fetch(`/api/events/${id}`)
            .then(response => response.json())
            .then(json => {
               setEvent(json.data);
               setFormData({
                  text: json.data.text || '',
                  time: json.data.time || ''
               });
               setLoading(false);
            })
            .catch(error => {
               console.error('Error fetching event:', error);
               setLoading(false);
            });
      }
   }, [id]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
         ...prev,
         [name]: value
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const updatedEvent = {
         ...event,
         text: formData.text.trim(),
         time: formData.time
      };

      fetch(`/api/events/${id}`, {
         method: 'PUT',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ event: updatedEvent })
      })
         .then(response => response.json())
         .then(() => {
            navigate('/events');
         })
         .catch(error => {
            console.error('Error updating event:', error);
         });
   };

   const handleDelete = (e) => {
      e.preventDefault();
      if (window.confirm('Are you sure you want to delete this event?')) {
         fetch(`/api/events/${id}`, {
            method: 'DELETE',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            }
         })
            .then(() => {
               navigate('/events');
            })
            .catch(error => {
               console.error('Error deleting event:', error);
            });
      }
   };

   if (loading) {
      return <div>Loading...</div>;
   }

   if (!event) {
      return <div>Event not found</div>;
   }

   return (
      <Card style={{ maxWidth: 600, margin: '20px auto' }}>
         <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
               Edit Event
            </Typography>
            <form onSubmit={handleSubmit}>
               <TextField
                  fullWidth
                  label="Text"
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  margin="normal"
                  required
               />
               <TextField
                  fullWidth
                  label="Time (0000-2359)"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  margin="normal"
                  required
                  inputProps={{
                     pattern: "[0-9]{4}",
                     maxLength: 4
                  }}
               />
               <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
                  <Button type="submit" variant="contained" color="primary">
                     Save
                  </Button>
                  <Button onClick={() => navigate('/events')} variant="outlined">
                     Cancel
                  </Button>
                  <Button onClick={handleDelete} variant="contained" color="error">
                     Delete
                  </Button>
               </div>
            </form>
         </CardContent>
      </Card>
   );
}

export default EventFormComponent;

