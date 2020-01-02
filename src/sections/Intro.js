import React from "react"
import {Grid, Hidden} from "@material-ui/core"
import { Fade} from "react-reveal"
import {Phone, ExpandMore} from '@material-ui/icons/';

const bg = require('../images/bgs/bg-header.jpg');
const Intro = () => {
    return (
        <> 
        <section className="intro-section">
                <div className="animated-bg">
                    <div class="anim">
                        <Fade  delay={2800}>
                            <div className="color-correct " />
                            <img src={bg} alt="bg" />
                        </Fade>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="layer-light" x="0px" y="0px" viewBox="0 0 1920 1080" enable-background="new 0 0 1920 1080" >
                            <defs>
                                <linearGradient id="MyGradient"  gradientTransform="rotate(-15)">
                                <stop offset="0%" stop-color="#217B95" />
                                <stop offset="15%" stop-color="rgba(50,122,147,1)" />
                                <stop offset="75%" stop-color="rgba(0,124,161,0.2)" />
                                </linearGradient>
                            </defs>
                                <path d="M0,392.306V1080h1920V647.331c0,0-165.5,91.836-384.623,105.011 c-215.715,12.97-302.606-198.286-324.033-252.025c-20.759-52.064-258.025-465.046-591.059-24.002c0,0-150.015,249.024-396.04-24.002
                                C224.246,452.312,150.792,368.303,0,392.306z"/>
                            </svg>
                        </div>
                        <div>
                            <svg version="1.1" className="layer-dark" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                viewBox="0 0 1920 1080" style={{enableBackground:"new 0 0 1920 1080;"}} >
                                <g>
                                    <defs>
                                        <linearGradient id="MyGradient1"  gradientTransform="rotate(-10)">
                                            <stop offset="0%" stop-color="#195D7C" />
                                            <stop offset="65%" stop-color="rgba(24,93,122,0.9)" />
                                            <stop offset="100%" stop-color="rgba(24,93,122,0.6)" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,0h774c0,0,322,229.9-11.3,431.5c-3.4,2.1-7,3.7-10.5,5.6c-45.5,25-454.7,218.3-123.4,516.9
                                    c0,0,108.2,114.5,116.5,126H0V0z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="intro-description">
                    <Grid container direction="row" alignItems="center" justify="center">
                    <Grid item>
               <Fade left delay={2200}>
                <h1 className="first-title">
                    EMPRÉSTIMO
                </h1>
                </Fade>
                <Fade left delay={2500}>
                    <h1 className="second-title">
                        100% ONLINE
                    </h1>

                </Fade>
                <Fade left delay={2900}>
                    <h1 className="third-title">
                        E SEGURO
                    </h1>
               </Fade>
               <div className="intro-action">
                <Fade bottom delay={3000}>
                <a href="tel:08000028118" className="hvr-hang">
                    <Phone className="mr-4"/>
                    0800 002 8118
                </a>
                </Fade>
                <Fade bottom delay={3200}>
                <a href="#home-section">
                    <ExpandMore className="mr-4"/>
                    Saiba Mais
                </a>
                </Fade>
               </div>
           </Grid>
           </Grid>
                    </div>
                </div>
        </section>
        </>
    )
}

export default Intro