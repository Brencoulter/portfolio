import React, { useEffect, useState, useRef } from 'react';
import Headshot from "./images/dragon-front.png";
import GameScreenshot from "./images/game-screenshot.png";
import Melissa from "./images/nutrition-with-melissa.png";
import CruxCleaning from "./images/crux-cleaning.png";
import Traveling from "./images/this-is-traveling.png";
import Background from "./images/background.png"
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image,
    Button
} from "react-bootstrap"
import "./Home.css"
import { CodeSquare, Code, Camera, Calculator, Controller, Bullseye, Droplet, People, Envelope, Github, Laptop, Telephone } from 'react-bootstrap-icons';

const mint = "#66FCF1";
const darker = "#45A29E"

export default function Home() {
    const myRef = useRef(null)
    const firstRender = useRef(false)
    const [skillsToggle, setSkillsToggle] = useState(false)
    const [projectsToggle, setProjectsToggle] = useState(true)
    const [websitesToggle, setWebsitesToggle] = useState(false)

    const toggleSkills = () => {
        setSkillsToggle(true)
        setProjectsToggle(false)
        setWebsitesToggle(false)
    }
    const toggleProjects = () => {
        setSkillsToggle(false)
        setProjectsToggle(true)
        setWebsitesToggle(false)
    }
    const toggleWebsites = () => {
        setSkillsToggle(false)
        setProjectsToggle(false)
        setWebsitesToggle(true)
    }

    useEffect(() => {
        if (firstRender.current) executeScroll()
    }, [skillsToggle, projectsToggle])
    
    useEffect(() => {
        firstRender.current = true
    },[])

    const executeScroll = () => myRef.current.scrollIntoView()    
    return(
        <>
        <Container fluid >
            <div className="floating-buttons">
            <h4 className="mint click" onClick={toggleSkills}>&bull;Skills</h4>
            <h4 className="mint click" onClick={toggleProjects}>&bull;Projects</h4>
            <h4 className="mint click" onClick={toggleWebsites}>&bull;Websites</h4>
            </div>
        </Container>
            <Jumbotron fluid id="welcome" className="remove-whitespace">
                <div className="welcome">
                <h1 className="mint">WELCOME...</h1>
                <p>... to my digital playground</p>
                <p style={{color: "#707793"}}>Scroll down to see what this is all about</p>
                </div>
            </Jumbotron>
            <Container fluid className="about remove-whitespace blue-background">
                <Row>
                    <Col md={7} xs={12} className="about-text">
                        <div className="column-padding">
                            <h2>Hey There!</h2>
                            <p>I’m Brendan Coulter, Coder, Engineer, and Adventure Enthusiast.</p>
                            <p>I love solving problems, overcoming challenges, and learning new things. 
                                This website is proof that you don't need a background in software engineering to code, 
                                and is a space for me to showcase my digital projects. 
                                I have developed multiple WordPress websites for various small businesses, 
                                and have taught myself multiple languages, the most recent of which is JavaScript (which this website is built upon)</p>
                            <p>So take a look around! What do you want to see?</p>
                            <div className="links">
                                <h4 className="mint click" onClick={toggleSkills}>&lt;What I can do&gt;</h4>
                                <h4 className="mint click" onClick={toggleProjects}>&lt;What I've been up to&gt;</h4>
                                <h4 className="mint click" onClick={toggleWebsites}>&lt;Real Websites&gt;</h4>
                            </div>
                            <p>Or feel free to get in contact with me! I'm always down for a chat. You can also see the code for everything live on GitHub</p>
                            <div className="contact">
                                <p><span><Telephone /></span> 0473 137 876</p>
                                <p><span><Envelope /></span> brencoulter@hotmail.com</p>
                                <a href="https://github.com/brencoulter" target="_blank"><p><span><Github /></span> github.com/Brencoulter</p></a>
                            </div>
                        </div>
                    </Col>
                    <Col md={5} xs={12}>
                        <Image src={Headshot} alt="Headshot" className="full-width headshot"/>
                    </Col>
                </Row>
            </Container>
            {projectsToggle && <Container ref={myRef} fluid id="projects" className="dark-background remove-whitespace">
                <Row className="title-row">
                    <Col xs={12}>
                        <h2>&lt;PROJECTS&gt;</h2>
                    </Col>
                </Row>
                <Row className="info-rows">
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
                <Row className="info-rows blue-background">
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
            </Container>}
            {skillsToggle && <Container ref={myRef} fluid id="skills" className="dark-background remove-whitespace">
            <Row className="title-row">
                    <Col>
                    <CodeSquare fill={mint} className="icon"/>
                        <h2>SKILLS</h2>                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Languages</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>Ruby</li>
                            <li>Python</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Frameworks and Libraries</h3>
                        <ul>
                            <li>ReactJS</li>
                            <li>Bootstrap</li>
                            <li>ExpressJS</li>
                            <li>Ruby On Rails</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Environments Etc</h3>
                        <ul>
                            <li>NodeJS</li>
                            <li>Git/GitHub</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Databases</h3>
                        <ul>
                            <li>Relational - MySQL</li>
                            <li>Non-Relational - MongoDB</li>
                        </ul>
                    </Col>
                </Row>   
            </Container>}
            {websitesToggle && <Container ref={myRef} fluid id="websites" className="dark-background remove-whitespace">
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
                <Row className="info-rows blue-background">
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
            </Container>}

        </>
    )
}
