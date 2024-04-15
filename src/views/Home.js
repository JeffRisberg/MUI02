import React, {Component} from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

/**
 * The welcome screen
 */
const styles = {
   grid: {
      height: '50px',
   }
};

class Home extends Component {

   render() {
      return (
         <div>
            <Card>
               <CardContent>
                  <div>
                     <h2>MUI02 Example</h2>
                     <div className="row">
                        <div className="col-md-4">
                           Uses React for presentation
                        </div>
                        <div className="col-md-4">
                           Uses Redux for data management
                        </div>
                        <div className="col-md-4">
                           Uses Node backend, with NEDB as proxy database
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>
         </div>
      )
   }
}

export default Home;
