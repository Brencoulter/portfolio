import React, { useEffect, useState, useRef } from 'react';
import Headshot from "./images/dragon-front.png"
import GameScreenshot from "./images/game-screenshot.png"
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image,
    Button
} from "react-bootstrap"
import "./Home.css"
import { CodeSquare, Code, Calculator, Controller, Bullseye, Laptop } from 'react-bootstrap-icons';

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
                    <Col md={6} xs={12}>
                    <a href="https://the-game-brencoulter.vercel.app/" target="_blank" ><Image src={GameScreenshot} alt="Game Screenshot" className="full-width"/></a>
                    </Col>
                </Row>
                <Row>
                <Col md={6} xs={12}>
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
                    </Col>
                    <Col md={6} xs={12}>
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
                     <p>A WordPress site built for a sole trader</p>
                    </Col>
                    <Col md={6} xs={12}>
                        <a href="http://www.nutritionwithmelissa.com.au/" ><Image className="full-width" src={GameScreenshot} alt="Website Screenshot" /></a>
                    </Col>
                </Row>
                <Row>
                <Col md={6} xs={12}>
                        <a href="https://www.thisistraveling.com/" ><Image className="full-width" src={GameScreenshot} alt="Website Screenshot" /></a>
                    </Col>
                    <Col md={6} xs={12}>
                    <h2>This Is Traveling</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={12}>
                     <h2>Crux Cleaning</h2>
                     <p>A simple small-business website built on WordPress</p>
                    </Col>
                    <Col md={6} xs={12}>
                        <a href="https://www.cruxcleaning.ca/" ><Image className="full-width" src={GameScreenshot} alt="Website Screenshot" /></a>
                    </Col>
                </Row>
                
            </Container>}

        </>
    )
}
