import React, { useState } from 'react';
import './Greeting.css';
import tweety from '../../assets/images/giphy.gif';
import hbd from '../../assets/audio/hbd.mp3';
import Sound from 'react-sound';

const Greeting = () => {
    const [visible, setVisible] = useState(true);

    const toggleSide = () => {
        if(visible){
            setVisible(false);
        } else {
            setVisible(true);
        }
    }

    return (
        <div className="container" onClick={toggleSide}>
            <div className="row justify-content-center">
                <div className="col-xs-4 offset-xs-4" >
                {
                    <img src={tweety} alt="tweety" style={{ height: '200px', width: 'auto' }}/>
                } 
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xs-4 offset-xs-4" >
                    <p>Dear Aavya, </p>
                    <p>Wish you a very Happy</p>
                    <p>First Birthday
                        <span className="cursor">|</span>
                   </p> 
                </div>
            </div>
            <br/>
            <div className="row justify-content-center">
                
            <span className="party-emoji" role="img" aria-label="party emoji">🎂🥳🥳🍩🎁🎁🍫🍬🍦🎈🍰🎉</span>
            </div>
            <Sound
                url={hbd}
                playStatus={Sound.status.PLAYING}
   
            />
        </div>
    )
};

export default Greeting;