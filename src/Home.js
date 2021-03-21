import React, { useEffect, useState, useRef } from 'react';
import Headshot from "./images/dragon-front.png";
import GameScreenshot from "./images/game-screenshot.png";
import Melissa from "./images/nutrition-with-melissa.png";
import CruxCleaning from "./images/crux-cleaning.png";
import Traveling from "./images/this-is-traveling.png";
import Resume from "./resumeBrendanCoulter.pdf"


//Tech Icons
import BootstrapIcon from "./icons/bootstrap2.png";
import ExpressJS from "./icons/expressjs.png";
import HTML from "./icons/html.png";
import CSS from "./icons/css.png";
import GithubIcon from "./icons/github.png"
import JS from "./icons/js.png";
import Mongo from "./icons/mongodb.png";
import Python from "./icons/python3.png";
import Ruby from "./icons/ruby.png";
import Rails from "./icons/rails.png";
import ReactIcon from "./icons/react.png";
import Node from "./icons/nodejs.png";
import ReactBootstrapIcon from "./icons/reactbootstrap.png"

import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image,
    OverlayTrigger,
    Tooltip
} from "react-bootstrap"
import "./Home.css"
import { Camera, Calculator, Controller, Bullseye, Droplet, Github, People, Envelope, Telephone, FileEarmarkPerson } from 'react-bootstrap-icons';

const techIcons = [
    [BootstrapIcon, "Bootstrap"],
    [GithubIcon, "Github"],
    [ExpressJS, "ExpressJS"],
    [HTML, "HTML"],
    [CSS, "CSS"],
    [JS, "JavaScript"],
    [Mongo, "MongoDB"],
    [Python, "Python3"],
    [Ruby, "Ruby"],
    [Rails, "Ruby on Rails"],
    [ReactIcon, "ReactJS"],
    [Node, "NodeJS"],
    [ReactBootstrapIcon, "React Bootstrap"]
]

const mint = "#66FCF1";
const darker = "#45A29E"

export default function Home() {
    const skillsRef = useRef(null)
    const projectsRef = useRef(null)
    const websitesRef = useRef(null)
    const contactRef = useRef(null)

    const skillsScroll = () => skillsRef.current.scrollIntoView() 
    const projectsScroll = () => projectsRef.current.scrollIntoView() 
    const websitesScroll = () => websitesRef.current.scrollIntoView() 
    const contactScroll = () => contactRef.current.scrollIntoView()

    const downloadFile = () => {
        //window.location.href = "https://portfolio-brencoulter.vercel.app/src/resumeBrendanCoulter.pdf"
        window.location.href = "./resumeBrendanCoulter.pdf"
      }

    return(
        <>
            <Container fluid >
                <div className="floating-buttons">
                <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 50, hide: 50 }}
                        overlay={<Tooltip>Github</Tooltip>}
                    >
                        <a href="https://github.com/brencoulter" target="_blank"><Github /></a>
    
                    </OverlayTrigger>
                    
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 50, hide: 50 }}
                        overlay={<Tooltip>Resume</Tooltip>}
                    >
                        <a href={Resume} download><FileEarmarkPerson /></a>
    
                    </OverlayTrigger>
                </div>
            </Container>
            <Jumbotron fluid id="welcome" className="remove-whitespace">
                <div className="welcome">
                <h1 className="mint">WELCOME...</h1>
                <p style={{color: "#707793"}}>Scroll down to see what this is all about</p>
                </div>
            </Jumbotron>
            <Container fluid className="about remove-whitespace dark-background" style={{ marginTop: "10px", borderRadius: "30px"}}>
                <Row>
                    <Col md={7} xs={12} className="about-text">
                        <div className="column-padding">
                            <h2>Hey There!</h2>
                            <p>I’m Brendan Coulter, Coder, Engineer, and Adventure Enthusiast.</p>
                            <p>I love solving problems, overcoming challenges, and learning new things. 
                                This website is proof that you don't need a background in software engineering to code, 
                                and is a space for me to showcase my digital projects. 
                                I have developed multiple WordPress websites for various small businesses, 
                                and have taught myself multiple languages, the most recent of which is JavaScript (which this website is built upon).</p>
                            <p>So take a look around! Play the games, and check out the websites I've built.</p>
                            <div className="links">
                                <h4 className="click" onClick={skillsScroll}>&lt;What I can do&gt;</h4>
                                <h4 className="click" onClick={projectsScroll}>&lt;What I've been up to&gt;</h4>
                                <h4 className="click" onClick={websitesScroll}>&lt;Real Websites&gt;</h4>
                                <h4 className="click" onClick={contactScroll}>&lt;Just say hi&gt;</h4>
                            </div>
                        </div>
                    </Col>
                    <Col md={5} xs={12}>
                        <Image src={Headshot} alt="Headshot" className="full-width headshot"/>
                    </Col>
                </Row>
            </Container>
            <Container ref={skillsRef} fluid id="skills" className="blue-background remove-whitespace" style={{ marginTop: "10px", borderRadius: "30px"}}>
                <Row className="title-row">
                    <Col>
                        <h2>&lt;TECHNOLOGIES&gt;</h2>  
                        <p>Here's a list of the languages, frameworks, and other technologies I am familiar with, in roughly the order of proficiency</p>                      
                    </Col>
                </Row>
                <Row>
                {techIcons.map(icon => {
                                return (
                                    <Col  className="tech-icon-container" style={{minHeight: "190px", padding: "20px"}}>
                                        <Image src={icon[0]} className="tech-icon" style={{width: "100px"}} />
                                        <p className="icon-label">{icon[1]}</p>
                                    </Col>
                                )
                            })}
                </Row>   
            </Container>
            <Container ref={projectsRef} fluid id="projects" className="dark-background remove-whitespace" style={{marginTop: "10px", borderRadius: "30px"}}>
                <Row className="title-row">
                    <Col xs={12}>
                        <h2>&lt;PROJECTS&gt;</h2>
                    </Col>
                </Row>
                <Row className="info-rows" style={{alignItems: "center"}}>
                    <Col lg={6} xs={{ span: 12, order: -1}} className="info-col">
                        <div className="column-padding">
                            <Controller fill={darker} className="icon"/>
                            <h3>The Game</h3>
                            <p>Navigate your way through multiple rooms, collecting items and defeating various monsters. Can you beat the boss and emerge victorious?</p>
                            <a href="https://the-game-brencoulter.vercel.app/" target="_blank" className="external-link">Play Now!</a>
                        </div>
                    </Col>
                    <Col lg={6} xs={12} className="image-col">
                        <a href="https://the-game-brencoulter.vercel.app/" target="_blank" ><Image src={GameScreenshot} alt="Game Screenshot" className="full-width screenshot"/></a>
                    </Col>
                </Row>
                <Row className="info-rows">
                    <Col xs={{span: 12, order: 2}} lg={6} className="image-col">
                        <a href="" target="_blank" ><Image src={GameScreenshot} alt="Game Screenshot" className="full-width screenshot"/></a>
                    </Col>
                    <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}}>
                        <div className="column-padding">
                            <Calculator fill={mint} className="icon"/>
                            <h3 className="mint">Calculator</h3>
                            <p style={{color: "#707793"}}>A simple calculator app, to save you doing calculations in your head</p>
                            <a target="_blank" className="external-link-mint-disabled disabled">Coming Soon</a>
                        </div>
                    </Col>
                </Row>
                <Row className="info-rows">
                    <Col xs={12} lg={6} className="info-col">
                        <div className="column-padding">
                            <Bullseye fill={darker} className="icon"/>
                            <h3>Click Speed Test</h3>
                            <p>Hit as many targets as you can before time runs out, but be careful... if you miss, you lose points! Submit your high scores, and challenge your friends.</p>
                            <a target="_blank" className="external-link-disabled disabled">Coming Soon</a>
                        </div>
                    </Col>
                    <Col lg={6} xs={12} className="image-col">
                        <Image src={GameScreenshot} alt="Game Screenshot" className="full-width" />
                    </Col>
                </Row>
            </Container>
            <Container ref={websitesRef} fluid id="websites" className="blue-background remove-whitespace" style={{ marginTop: "10px", borderRadius: "30px"}}>
                <Row className="title-row">
                    <Col>
                        <h2 className="mint">&lt;WEBSITES&gt;</h2>                        
                    </Col>
                </Row>
                <Row className="info-rows">
                <Col lg={6} xs={12} className="info-col">
                    <People fill={darker} className="icon"/>
                    <div className="column-padding">
                        <h3>Nutrition With Melissa</h3>
                        <p>A WordPress website built for a nutritionist to communicate with her clients, and to welcome in new clients. 
                         It includes an online booking system, and even blog posts so you can keep up to date on the latest nutrition advice.</p>
                         <a href="http://www.nutritionwithmelissa.com.au/" target="_blank" className="external-link">Learn more here</a>
                         </div>
                    </Col>
                    <Col lg={6} xs={12}>
                        <a href="http://www.nutritionwithmelissa.com.au/" target="_blank"><Image className="full-width screenshot" src={Melissa} alt="Nutrition With Melissa" /></a>
                    </Col>
                </Row>
                <Row className="info-rows">
                    <Col lg={6} xs={{span: 12, order: 2}}>
                        <a href="https://www.thisistraveling.com/" target="_blank"><Image className="full-width screenshot" src={Traveling} alt="Website Screenshot" /></a>
                    </Col>
                    <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}}>
                        <div className="column-padding">
                            <Camera fill={mint} className="icon"/>
                            <h3 className="mint">This Is Traveling</h3>
                            <p>Built on WordPress, this website was built as a space for an Adventure Traveller 
                            to showcase her photographs and connect with her audience. 
                            The photos are absolutely breathtaking!</p>
                            <a href="https://www.thisistraveling.com/" target="_blank" className="external-link-mint">Go take a look</a>
                        </div>
                    </Col>
                </Row>
                <Row className="info-rows">
                    <Col lg={6} xs={12} className="info-col">
                      <div className="column-padding">
                            <Droplet fill={darker} className="icon"/>
                            <h3 >Crux Cleaning</h3>
                            <p>Sometimes simplicity is best for a small business. This one was also created on WordPress, concisely showcasing exactly what he does.</p>
                            <a href="https://www.cruxcleaning.ca/" target="_blank" className="external-link">Check it out here</a>
                        </div>
                    </Col>
                    <Col lg={6} xs={12}>
                        <a href="https://www.cruxcleaning.ca/" target="_blank"><Image className="full-width screenshot" src={CruxCleaning} alt="Website Screenshot"/></a>
                    </Col>
                </Row> 
            </Container>
            <Container ref={contactRef} fluid id="contact" className="dark-background remove-whitespace" style={{ marginTop: "10px", borderRadius: "30px"}}>
                <Row className="title-row">
                    <Col>
                        <h2>&lt;Contact&gt;</h2>  
                        <p>Nobody really wants a generic contact form, so just shoot me an email, give me a call, or check out my work on Github</p>
                        <div className="contact">
                            <p><span><Telephone /></span> 0473 137 876</p>
                            <p><span><Github /></span> Github.com/Brencoulter</p>
                            <p><span><Envelope /></span> brencoulter@hotmail.com</p>
                        </div>                      
                    </Col>
                </Row>
            </Container>
        </>
    )
}
