import React, {useEffect, useRef, useState} from 'react';
import {gsap,Power3} from "gsap";
import "../App.css"

const Video1 = () => {
    let app = useRef(null)
    let circle = useRef(null)
    let circleRed = useRef(null)
    let circleBlue = useRef(null)

    const [circleState, setCircleState] = useState(false)


    const handleClick = () => {
        gsap.to(circleRed, .8, {width: 200, height: 200,  ease: Power3.easeInOut})
        setCircleState(true);
    }

    const handleClickRevert = () => {
        gsap.to(circleRed, .8, {width: 75, height: 75,  ease: Power3.easeInOut})
        setCircleState(false);
    }


    useEffect(() => {
        console.log(circleRed)
        gsap.to(app,0,{css:{visibility:'visible'}})
         gsap.from(circle, 1, {opacity : 0, ease: Power3.easeInOut, x: 40})
         gsap.from(circleRed, 1, {opacity : 0, ease: Power3.easeInOut, x: 40, delay: .2})
         gsap.from(circleBlue, 1, {opacity : 0, ease: Power3.easeInOut, x: 40, delay: .4})


    },[])

    return (
        <div ref={el => {app=el}} className="App2">
            <header className="App-header">
                <div className="circle-container">
                    <div
                        ref={el => {circle = el}}
                        className="circle"></div>
                    <div
                        ref={el => {circleRed = el}}
                        onClick={circleState !== true ? handleClick : handleClickRevert}
                        className="circle red"></div>
                    <div
                        ref={el => {circleBlue = el}}
                        className="circle blue"></div>
                </div>
            </header>
        </div>
    );
};

export default Video1;