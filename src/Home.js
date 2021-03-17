import React, { useEffect, useState, useRef } from 'react';
import Headshot from "./images/dragon-front.png";
import GameScreenshot from "./images/game-screenshot.png";
import Melissa from "./images/nutrition-with-melissa.png";
import CruxCleaning from "./images/crux-cleaning.png";
import Traveling from "./images/this-is-traveling.png";
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image,
    Button
} from "react-bootstrap"
import "./Home.css"
import { CodeSquare, Code, Calculator, Controller, Bullseye, Envelope, Laptop, Telephone } from 'react-bootstrap-icons';

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
            <Jumbotron fluid id="welcome" className="remove-whitespace">
                <h1>WELCOME...</h1>
                <p>... to my digital playground</p>
                <p>Scroll down to see what this is all about</p>
            </Jumbotron>
            <Container fluid className="about remove-whitespace">
                <Row>
                    <Col md={6} xs={12}>
                        <h2>Hey There!</h2>
                        <p>I’m Brendan Coulter, Rock Climber, Engineer, and Enthusiastic Coder.</p>
                        <p>This website is a space for me to keep my digital projects, both personal and professional. What do you want to see? </p>
                        <Button onClick={toggleSkills}>What I can do</Button>
                        <Button onClick={toggleProjects}>What I've been up to</Button>
                        <Button onClick={toggleWebsites}>Real Websites</Button>
                        <p>Or say hi!</p>
                        <p><span><Telephone /></span> 0473 137 876</p>
                        <p><span><Envelope /></span> brencoulter@hotmail.com</p>
                    </Col>
                    <Col md={6} xs={12}>
                    <Image src={Headshot} alt="Headshot" className="full-width"/>
                    </Col>
                </Row>
                <Row>
                    
                </Row>
            </Container>
            {projectsToggle && <Container ref={myRef} fluid id="projects" className="dark-background remove-whitespace">
                <Row>
                <Col xs={12}>
                    <Code fill="#3affa6"/>
                        <h2>PROJECTS</h2>
                    </Col>
                </Row>
                <Row>
                <Col md={6} xs={{ span: 12, order: -1}}>
                    <Controller fill="#3affa6"/>
                    <h2>The Game</h2>
                    <p>Navigate your way through multiple rooms, collecting items and defeating various monsters. Can you beat the boss and emerge victorious?</p>
                    <a href="https://the-game-brencoulter.vercel.app/" target="_blank" ><Button>Play Now!</Button></a>
                    </Col>
                    <Col md={6} xs={12} className="image-col">
                    <a href="https://the-game-brencoulter.vercel.app/" target="_blank" ><Image src={GameScreenshot} alt="Game Screenshot" className="full-width"/></a>
                    </Col>
                </Row>
                <Row>
                <Col md={6} xs={12} className="image-col">
                    <h3 className="coming-soon-overlay">Coming Soon</h3>
                    <Image src={GameScreenshot} alt="Game Screenshot" className="full-width"/>
                </Col>
                <Col md={6} xs={{ span: 12, order: -1}}>
                    <Calculator fill="#3affa6"/>
                    <h2>Calculator</h2>
                    </Col>
                </Row>
                <Row>
                <Col md={6} xs={12}>
                    <Bullseye fill="#3affa6"/>
                    <h2>Click Speed Test</h2>
                    <Button>Play Now!</Button>
                    </Col >
                    <Col md={6} xs={12} className="image-col">
                    <h3 className="coming-soon-overlay">Coming Soon</h3>
                    <Image src={GameScreenshot} alt="Game Screenshot" className="full-width"/>
                </Col>
                </Row>
                
            </Container>}
            {skillsToggle && <Container ref={myRef} fluid id="skills" className="dark-background remove-whitespace">
                <Row>
                    <Col>
                    <CodeSquare fill="#3affa6"/>
                        <h2>SKILLS</h2>                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Languages</h2>
                        <ul>
                            <li>Javascript</li>
                            <li>Ruby</li>
                            <li>Python</li>
                        </ul>
                    </Col>
                    <Col>
                        <h2>Frameworks and Libraries</h2>
                        <ul>
                            <li>ReactJS</li>
                            <li>ExpressJS</li>
                            <li>Ruby On Rails</li>
                        </ul>
                    </Col>
                    <Col>
                        <h2>Environments Etc</h2>
                        <ul>
                            <li>NodeJS</li>
                            <li>Git/GitHub</li>
                        </ul>
                    </Col>
                    <Col>
                        <h2>Databases</h2>
                        <ul>
                            <li>Relational - MySQL</li>
                            <li>Non-Relational - MongoDB</li>
                        </ul>
                    </Col>
                </Row>
                
            </Container>}
            {websitesToggle && <Container ref={myRef} fluid id="websites" className="dark-background remove-whitespace">
                <Row>
                    <Col>
                    <Laptop fill="#3affa6"/>
                        <h2>WEBSITES</h2>                        
                    </Col>
                </Row>
                <Row>
                <Col md={6} xs={12}>
                     <h2>Nutrition With Melissa</h2>
                     <p>A WordPress site built for a sole trader, including a bookings system</p>
                    </Col>
                    <Col md={6} xs={12} className="image-col">
                        <a href="http://www.nutritionwithmelissa.com.au/" target="_blank"><Image className="full-width" src={Melissa} alt="Nutrition With Melissa" /></a>
                    </Col>
                </Row>
                <Row>
                <Col md={6} xs={12} className="image-col">
                        <a href="https://www.thisistraveling.com/" target="_blank"><Image className="full-width" src={Traveling} alt="Website Screenshot" /></a>
                    </Col>
                    <Col md={6} xs={12}>
                    <h2>This Is Traveling</h2>
        <p>A travel blog for an adventurer to interact and share with her follower. Built on WordPress, there was a significant amount of custom code integrated with the base plugins</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={12}>
                     <h2>Crux Cleaning</h2>
                     <p>A simple small-business website also built on WordPress</p>
                    </Col>
                    <Col md={6} xs={12} className="image-col">
                        <a href="https://www.cruxcleaning.ca/" target="_blank"><Image className="full-width" src={CruxCleaning} alt="Website Screenshot" /></a>
                    </Col>
                </Row>
                
            </Container>}

        </>
    )
}
