import React from 'react';


const styles = {
  logo: {
    width: 150,
    margin: '25px 0 0 90px',
    float: 'left',
    fontSize:28,
    fontWeight:600,
    position:'absolute',
   },

  /*pandu:{
    margin:'20px 0 0 10px',
    fontSize:'20px',
    color:'white',
    position:'absolute',
    top:'13px'
  },*/

  base: {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding: '15px',
    width: '100%'
  },
  isi:{
    margin: '170px 0 0 109px',
    fontSize:40,
    fontWeight:600,
    position:'absolute',
    color:'white',
    lineHeight:'40px',
    
  },
isi2:{
  margin: '270px 0 0 109px',
  fontSize:20,
  fontWeight:400,
  position:'absolute',
  color:'white',
  lineHeight:'30px',
}
}

class HeaderKeamanan extends React.Component {

  render(){
    return (
      <div>
        <div style={styles.logo} onClick={() => window.scrollTo(0, 0)}>
          <img style={{width: '100%'}} src="https://s3-ap-southeast-1.amazonaws.com/image-plasgos/font+plasgos.png" alt="logo-plasgos"/>
        </div>
        <p style={styles.isi}>Panduan <br/>Keamanan Plasgos</p>
        <p style={styles.isi2}>Berusaha memberikan keamanan dan kenyamanan berbelanja di Plasgos. <br/>Namun tetap disarankan untuk selalu waspada.</p>
        <div style={styles.base}>
            <img style={{ width: '100%', margin: '0px 18px 0 0'}} src='banner.png'/>
        </div>
      </div>
    );
  }
}

export default HeaderKeamanan;
