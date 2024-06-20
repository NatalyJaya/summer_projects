import React, { useContext } from "react";
import'./Main.css'
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";



const{onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

    return (
        <div className='main'>
           <div className="nav">
            <p>AlaskaDemo</p>
            <img src={assets.listo} alt="" />

           </div>
           <div className="main-container">

              {!showResult
              ?<>
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

              </>
              : <div className="result">
                  <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                  </div>
                  <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className="loader">
                      <img src={assets.loader} alt="" />
                      <hr />
                      <hr />
                      <hr />
                    </div>
                    :
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>

                  }
                   
                  </div>
              </div>
              }

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value) } value={input} type="text" placeholder="Escriba aqui" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                    </div>
                    <p className="bottom-info">
                        NatData inc coorps
                    </p>
            </div>
           </div>
        </div>
    )


export default Main
