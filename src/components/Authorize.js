import React from 'react';
import { Redirect } from 'react-router-dom';



function Authorize(RenderedComponent, props) {
  return class extends React.Component {

    render() {

      if (localStorage.getItem('jwtToken') && this.props.location.pathname === "/login") {
        return <Redirect to="/myProfile" />

        // I am logged in
      } else if (!localStorage.getItem('jwtToken') && this.props.location.pathname !== "/login" && this.props.location.pathname != "/home") {

        return <Redirect to="/login" />
        // not logged in
      }
      else {
        return (
          <RenderedComponent {...this.props} {...props}/>
        )
      }
    }
  }
  
}

export default Authorize
