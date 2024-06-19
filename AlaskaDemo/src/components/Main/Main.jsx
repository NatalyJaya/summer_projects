import React from "react";
import'./Main.css'
import { assets } from "../../assets/assets";



const Main = () => {
    return (
        <div className='main'>
           <div className="nav">
            <p>AlaskaDemo</p>
            <img src={assets.listo} alt="" />

           </div>
           <div className="main-container">
            <div className="greet">
                <p><span>Holiwis Kiwis!</span></p>
                <p>Klk</p>
            </div>
            <div className="cards">
                <div className="card">
                  <p>Encontrar la milf de la xenia</p> 
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                  <p>Mátate</p> 
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p>Preguntar al naïm sobre practicas</p> 
                  <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                  <p>Nombre de madres del server</p> 
                  <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder="Escriba aqui" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                    </div>
                    <p className="bottom-info">
                        NatData inc coorps
                    </p>
                
            </div>
           </div>
        </div>
    )
}

export default Main