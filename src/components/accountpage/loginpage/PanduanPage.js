import React from 'react';
import DocumentTitle from 'react-document-title';
import PanduanForm from './PanduanForm';
import HeaderKeamanan from '../HeaderKeamanan';
import FooterKeamanan from '../FooterKeamanan';

class PanduanKeamanan extends React.Component {
	render(){
    return(
      <DocumentTitle title={`Panduan Keamanan Plasgos`}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'white'}}>
          <div><HeaderKeamanan /></div>
          <div style={{width:'850px'}}><PanduanForm/></div>
          <div style={{width:'100%', marginTop:'16px'}}><FooterKeamanan /></div>
        </div>
      </DocumentTitle>
    );
	}
}


export default  PanduanKeamanan;

