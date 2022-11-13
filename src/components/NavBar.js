import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg'
import naviIcon1 from '../assets/img/nav-icon1.svg'
import naviIcon2 from '../assets/img/nav-icon2.svg'
import naviIcon3 from '../assets/img/nav-icon3.svg'
import "../App.css";



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState ('home')
    const [scrolled, setScrolled] = useState(false) //to change the color 

    useEffect(()=>{
    const onScroll = ()=>{
        if(window.scrollY >50){
            setScrolled(true)
        }else{
           setScrolled(false) 
        }
    }
    window.addEventListener("scroll", onScroll)
    return () =>window.removeEventListener("scroll", onscroll)
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }
    return (

    function BasicExample() {
        return (
            <Navbar  expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'activenavbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'activenavbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'activenavbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className='navbar-text' >
                            <div className='social-icon'>
                                <a href='#'><img src={naviIcon1} alt =""/></a>
                                <a href='#'><img src={naviIcon2} alt =""/></a>
                                <a href='#'><img src={naviIcon3} alt =""/></a>
                            </div>
                            <button className='vvd' onClick={()=> console.log('connect')} >
                                <span> Let's Connect</span></button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

   
    )
}