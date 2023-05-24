// import React from 'react';
import heroBg from "../../assets/hero-bg.png";
import searchSvg from "../../assets/search-icon.svg";
export default function Hero() {
  return (
    <div style={{ paddingLeft: 0, marginTop:20}} id="heroContainer">
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url('${heroBg}')` , maxHeight:500, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover", display:"flex",flexFlow:'column',
        alignItems: 'center',
        justifyContent: 'center',}}
      >
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Discover Flowers Around You</h1>
              <h4 className='mb-3' style={{fontSize:17, opacity:0.7, fontWeight:400}}>Explore between more than 8.427 sightings</h4>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <input type="text" placeholder="Looking for something specific ?" style={{height:50, padding:"0 40px 0 10px", background:"#fff", border:"none", borderRadius:3, width:"100%", marginRight:"-30px"}}/>
                <img src={searchSvg} alt="search-icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}