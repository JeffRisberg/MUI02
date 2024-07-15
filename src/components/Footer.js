import React from 'react';
import Typography from "@mui/material/Typography";

const styles = {
   root: {
      marginTop: '10px',
      padding: '6px',
      background: '#eee'
   },
};

export function Footer(props) {
   const {classes} = props;

   return (
      <div>
         <Typography>
            Example project using React Material UI 5
         </Typography>
      </div>
   );
}
