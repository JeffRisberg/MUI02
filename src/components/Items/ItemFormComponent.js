import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

/**
 * Item Editing Form
 *
 * @author Jeff Risberg
 * @since May 2017
 */

class ItemFormComponent extends Component {
   static propTypes = {
      fetchHandler: PropTypes.func.isRequired,
      //handleSubmit: PropTypes.func.isRequired,
      //reset: PropTypes.func.isRequired,
      //submitHandler: PropTypes.func.isRequired,
      submitting: PropTypes.bool,
      submitSucceeded: PropTypes.bool,
      error: PropTypes.string,
   };

   static defaultProps = {
      submitting: false,
      submitSucceeded: false,
      error: '',
   };

   handleSubmit() {
      console.log("handleSubmit");
   }

   submitHandler() {
      console.log("submitHandler");
   }

   deleteHandler() {
      console.log("deleteHandler");
   }

   componentDidMount() {
      const {fetchHandler} = this.props;
      fetchHandler(this.props.match.params.id);
   }

   componentWillUnmount() {
      //this.props.reset();
   }

   render() {
      const messageClass = this.props.error ? 'form-error-copy' : 'form-label';

      return (
         <div className="items__detail">
            <form onSubmit={this.handleSubmit(this.submitHandler)}>
               <div>
                  <label>Name:</label>
                  <div>
                  </div>
               </div>
               <div>
                  <label>Value:</label>
                  <div>
                  </div>
               </div>
               <div>
                  <label>Description:</label>
                  <div>
                  </div>
               </div>
               <div>
                  <button type="submit" className="btn btn-default">Submit</button>
               </div>
               <div>
                  <button onClick={(e) => this.deleteHandler(e, this.props.match.params.id)}
                          className="btn btn-default">
                     Delete
                  </button>
               </div>
            </form>
         </div>
      );
   }
}

export default ItemFormComponent;

