import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

/**
 * Item Editing Form
 *
 * @author Jeff Risberg
 * @since May 2017
 */

function ItemFormComponent() {
   const { id } = useParams();
   const navigate = useNavigate();
   const [item, setItem] = useState(null);
   const [loading, setLoading] = useState(true);
   const [formData, setFormData] = useState({
      name: '',
      value: '',
      description: ''
   });

   useEffect(() => {
      if (id) {
         fetch(`/api/items/${id}`)
            .then(response => response.json())
            .then(json => {
               setItem(json.data);
               setFormData({
                  name: json.data.name || '',
                  value: json.data.value || '',
                  description: json.data.description || ''
               });
               setLoading(false);
            })
            .catch(error => {
               console.error('Error fetching item:', error);
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
      const updatedItem = {
         ...item,
         name: formData.name.trim(),
         value: parseFloat(formData.value),
         description: formData.description.trim(),
         lastUpdated: Date.now() / 1000
      };

      fetch(`/api/items/${id}`, {
         method: 'PUT',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ item: updatedItem })
      })
         .then(response => response.json())
         .then(() => {
            navigate('/items');
         })
         .catch(error => {
            console.error('Error updating item:', error);
         });
   };

   const handleDelete = (e) => {
      e.preventDefault();
      if (window.confirm('Are you sure you want to delete this item?')) {
         fetch(`/api/items/${id}`, {
            method: 'DELETE',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            }
         })
            .then(() => {
               navigate('/items');
            })
            .catch(error => {
               console.error('Error deleting item:', error);
            });
      }
   };

   if (loading) {
      return <div>Loading...</div>;
   }

   if (!item) {
      return <div>Item not found</div>;
   }

   return (
      <Card style={{ maxWidth: 600, margin: '20px auto' }}>
         <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
               Edit Item
            </Typography>
            <form onSubmit={handleSubmit}>
               <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
               />
               <TextField
                  fullWidth
                  label="Value"
                  name="value"
                  type="number"
                  value={formData.value}
                  onChange={handleChange}
                  margin="normal"
                  required
               />
               <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows={3}
               />
               <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
                  <Button type="submit" variant="contained" color="primary">
                     Save
                  </Button>
                  <Button onClick={() => navigate('/items')} variant="outlined">
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

export default ItemFormComponent;

