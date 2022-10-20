import React, {useEffect, useRef} from 'react';
import "../App.scss"
import Denji from '../images/anime-chainsaw-man-denji-chainsaw-man-anime-boys-null-hd-wallpaper-preview.jpg'
import CSSRulePlugin from "gsap/CSSRulePlugin";
import {gsap,Power2} from "gsap";

const Video2 = () => {
    let container = useRef(null)
    let image = useRef(null)
    let imageReveal = CSSRulePlugin.getRule('.img-container:after')



    useEffect(() => {

        gsap.timeline(container, 0, {css:{
            visibility:'visible',
        }}).to(imageReveal,1.4,{width:"0%",ease:Power2.easeInOut})
            .from(image,1.4,{scale:1.6,ease:Power2.easeInOut,delay:-1.6})
    },[])
    return (
        <div className="main">
            <div className="container" ref={el => container=el}>
                <div className="img-container">
                    <img ref={el => image = el} alt="img" src={Denji}/>
                </div>

            </div>
            
        </div>
    );
};

export default Video2;