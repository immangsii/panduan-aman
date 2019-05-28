import React from 'react';
import {
  Layout,
  Tooltip,
  Divider
} from 'antd';

const { Footer } = Layout;
const styles = {
  base: {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding: '18px',
    width: '100%',
    borderTop: '.5px solid #e0e0e0'
  }
};

class footerKeamanan extends React.Component {
  render() {
    return(
      <Footer style={styles.base}>
        <div style={{textAlign:'center', width:'100%', fontWeight:600, fontSize:'15px', color:'rgba(0,0,0,.7)'}}>
          <div>Jika kamu menemukan aktivitas yang mencurigakan di Plasgos, mohon segera laporkan melalui Bantuan Plasgos <a href="http://www.plasgos.com/contactus/" target='_blank'> (Hubungi Kami).</a></div>
        </div>
      </Footer>
    );
  }
}

export default footerKeamanan;