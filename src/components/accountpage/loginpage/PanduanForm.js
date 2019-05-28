import React from 'react';
import { Tabs, Collapse, Icon } from 'antd';
import '../social/panduan.css';

const styles = {}

const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
  }  
const Panel = Collapse.Panel;
class PanduanForm extends React.Component {
    render(){
        return(
            <div>
                <div className='kata'>
                    <br/><div><h2>Cara Belanja Aman, Gak Takut Kena Tipu!</h2></div>
                    <div>
                        Kami selalu berupaya agar sistem keamanan terus terjaga, supaya kamu bisa belanja online di Plasgos dengan aman dan 
                        nyaman. Namun, kami juga butuh partisipasi kamu.
                        <br/>Yuk, cegah kejahatan di Internet, mulai dari akun kamu sendiri.
                    </div>
                </div>
                <br/><div className='garis'></div><br/>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane  tab={<div className='tabPar'><b>CEGAH PEMBAJAKAN</b></div>} key="1">
                         <div className='subHead'>Jaga informasi pribadi kamu</div>
                         <p>E-mail, username, password, kode OTP (One Time Password) dan nomor kartu kredit cukup kamu saja yang tahu. Jaga pula bukti pembayaran, KTP dan Buku Tabungan dari pihak yang mencoba untuk mengambil alih akun kamu.</p>
                         <br/><div className='subHead'>Hindari link-link yang dianggap mencurigakan</div>
                         <p>Waspadai link yang biasa dibagikan melalui pesan pribadi dan kadang menyerupai alamat situs Plasgos. Kami tidak dapat menjamin keamanan transaksi di luar <a href='https://www.plasgos.com'>https://www.plasgos.com</a>.</p>
                         <br/><div className='subHead'>Kode OTP itu rahasia</div>
                         <p>Masukkan kode tersebut hanya di situs/aplikasi resmi Plasgos. Jangan bagikan pada siapa pun, termasuk pihak Plasgos.</p>
                         <br/><br/><p style={{textAlign:'center'}}><b>Praktik pembajakan akun/phishing dapat menyebabkan kamu kehilangan kontrol atas akun yang dapat berujung pada pencurian dana terkait dengan akun kamu.</b></p>
                    </TabPane>
                    <TabPane tab={<div className='tabPar'><b>CEGAH PENIPUAN</b></div>} key="2">
                         <div className='subHead'>Lakukan jual-beli hanya di Plasgos</div>
                         <p>Kami tidak dapat menjamin keamanan transaksi di luar sistem Plasgos. Karena itu, berhati-hatilah pada Penjual yang mengajak kamu berkomunikasi/bertransaksi di luar Plasgos.</p>
                         <br/><div className='subHead'>Hati-hati dalam membeli</div>
                         <p>Penipu memasang harga yang jauh lebih menarik untuk mendapatkan perhatian kamu. Bandingkan harga barang dengan produk serupa agar kamu memiliki gambaran.</p>
                         <br/><div className='subHead'>Pilih Penjual yang bisa dipercaya</div>
                         <p>Saat akan bertransaksi, perhatikan kredibilitas Penjual dari rating, serta jumlah dan isi feedback yang diberikan pembeli sebelumnya.</p>
                         <br/><div className='subHead'>Tidak ada biaya di luar tagihan transaksi</div>
                         <p>Abaikan setiap pihak (mengaku sebagai Bea Cukai/Pajak/Polisi, bahkan staf Plasgos) yang menghubungi untuk meminta kamu mentransfer biaya tambahan di luar tagihan transaksi.</p>
                         <br/><div className='subHead'>Hati-hati dengan pihak yang mengatasnamakan Plasgos</div>
                         <p>Jangan mudah percaya pada pihak yang mengatasnamakan Plasgos untuk menawarkan promo/voucher/hadiah, ataupun menginformasikan kendala transaksi, pengiriman, verifikasi dan lainnya kepada kamu. Daftar akun resmi Plasgos dapat kamu lihat <a href="www.plasgos.com">di sini.</a></p>
                         <br/><br/><p style={{textAlign:'center'}}><b>Scam/Penipuan di internet dapat merugikan kamu secara material melalui cara-cara yang ilegal.</b></p>
                    </TabPane>
                    <TabPane tab={<div className='tabPar'><b>AMANKAN TRANSAKSI</b></div>} key="3">
                         <div className='subHead'>Transaksi hanya melalui Sistem Pembayaran resmi Plasgos</div>
                         <p>Lihat cara pembayaran <a href='www.plasgos.com'>di sini.</a></p>
                         <br/><div className='subHead'>Kenali nomor tagihan kamu dan transfer dana sesuai nominalnya</div>
                         <p>Jangan hiraukan arahan pihak yang meminta untuk membayarkan invoice selain milik kamu yang tertera pada Sistem Plasgos.</p>
                    </TabPane>
                    <TabPane tab={<div className='tabPar'><b>LAINNYA</b></div>} key="4">
                        <Collapse className='lainnya'
                            bordered={false}
                            defaultActiveKey={['0']}
                            expandIcon ={({ isActive }) => <Icon style={{color:'#fa541c', fontSize:'30px' }} type="down-circle" rotate={isActive ? 180 : 0} />}
                        >
                            <Panel header={<div className='subHead1'>Akun Resmi dan Bukan Akun Resmi Plasgos</div>} key="1" style={styles.panel}>
                            <div className='subHead2'>Kamu menerima pesan dari pihak yang mengatasnamakan Bukalapak? Pastikan dulu keaslian informasi dan akun resmi dengan checklist berikut.</div>
                            </Panel>
                            <Panel header={<div className='subHead1'>Tips Menjaga Keamanan Akun</div>} key="2" style={styles.panel}>
                            <div className='subHead2'>Pelajari hal-hal berikut untuk meningkatkan keamanan dan kenyamanan kamu dalam menggunakan akun Plasgos kamu.</div>
                            <ol className='list'>
                                <br/><li>Ganti password akun Plasgos dan akun lain yang terkait (e-mail, Facebook, Google+ dll) minimal 90 hari sekali. Pastikan di antara akun-akun tersebut tidak memakai password yang sama.</li>
                                <br/><li>Gunakan password dengan kombinasi huruf dan angka serta karakter spesial (!, @, #, $ dan seterusnya).</li>
                                <br/><li>Lebih berhati-hati apabila kamu mengakses Plasgos dari tempat umum (wi-fi publik), atau melalui perangkat (laptop, HP) yang bukan milik kamu. Pastikan browser kamu dalam Incognito Mode, selalu log-out akun setelah selesai menggunakan, dan jangan lupa bersihkan History pada browser yang digunakan.</li>
                                <br/><li>Apabila ada aktivitas yang mencurigakan dan mengarah pada pembajakan akun, segera laporkan pada Customer Service melalui <a href='http://www.plasgos.com/contactus/' target='_blank'>Hubungi Plasgos</a>, atau Call Center Plasgos.</li>
                            </ol>
                            </Panel>
                        </Collapse>
                    </TabPane>
                </Tabs>
            </div>
           
        );
    }
}

export default PanduanForm;