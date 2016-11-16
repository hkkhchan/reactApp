import React from 'react';
class Ken extends React.Component {
	 constructor(props) {
 		 super(props);
 		 this.state= {}
   }
   render() {
      return(
         <div>
            Hello {this.props.name}!!!
         </div>
      );
   }
}

Ken.propTypes = {
  name: React.PropTypes.string,
}

Ken.defaultProps = {
  name: 'Tom',
}

export default Ken;
