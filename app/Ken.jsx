import React from 'react';

const msg='ken';
class Ken extends React.Component {
   render() {
      return (
         <div>
            Hello {msg}!!!
         </div>
      );
   }
}

Ken.defaultProps = {
}
export default Ken;
