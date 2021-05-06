import { useState, Component } from "react"
import { AiOutlineSearch } from 'react-icons/ai'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Form ,Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, List, Row } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown, FormControl, Button, Container } from 'react-bootstrap';

import "./Header.css"


class Header extends Component{
    componentDidMount(){
        const navbar = document.getElementsByClassName("navbar")[0];
        window.onscroll = () => {
            if(document.body.scrollTop > 20 ||  document.documentElement.scrollTop > 20){
                navbar.style.position = "fixed";
                navbar.style.zIndex = "2";
                navbar.style.width = "100%";
                navbar.style.background = "rgba(0,0,0,0.6)";
            }
            else{
                navbar.style.position = "relative";
                navbar.style.background = "linear-gradient(to left, #c63439, #06105b)";
            }
        }
    }
    render(){
        return (
            <Navbar collapseOnSelect expand="lg" id="header" className="navbar">
                <Container>
                    <Navbar.Brand href="home">
                        <h2 className="header-brand">BKSOFT</h2>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="home">Trang chủ</Nav.Link>
    
                            <Nav.Link href="introduction">Giới thiệu</Nav.Link>
    
                            <NavDropdown title="Sản phẩm">
                                <NavDropdown.Item href="game">Game</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="socialapp">Social app</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="product/pricing">Bảng giá</NavDropdown.Item> */}
                            </NavDropdown>
    
                            <NavDropdown title="Tin tức">
                                <NavDropdown.Item href="news">Tin tức</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="events">Sự kiện</NavDropdown.Item>
                            </NavDropdown>
    
                            <NavDropdown title="Kết nối">
                                <NavDropdown.Item href="contact">Liên hệ</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="aboutus">Chúng tôi</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>    
            </Navbar>
        )
    }
} 

export default Header