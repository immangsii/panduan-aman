import React from 'react';
import './header.css';
import { relative, isAbsolute } from 'path';

const styles = {
     logo: {
       width: 150,
       margin: '6px 0 0 0',
       float: 'left',
       fontSize:28,
       fontWeight:600
      }
}

class HeaderAuth extends React.Component {
  render(){
    return (
      <div>
        <div style={styles.logo} onClick={() => window.scrollTo(0, 0)}>
          <img style={{ width: '100%', margin: '0px 18px 16px 0'}} src="https://s3-ap-southeast-1.amazonaws.com/image-plasgos/font+plasgos.png" alt="logo-plasgos"/>
        </div>
      </div>
    );
  }
}

export default HeaderAuth;
