import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is <b>DANIEL AÑONUEVO</b> and I am currently learning to be a Full Stack Developer. I'm currently working as an IT Helpdesk Analyst II at <a href='https://careers.unitedhealthgroup.com/'>Optum Global Solutions</a>. I've been with the BPO Industry for a while now and I wanted to explore new things. I am much interested in developing new things which excite me a lot. :)  </p>
                        <p className={classes.br}>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;