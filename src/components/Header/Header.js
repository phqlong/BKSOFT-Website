import { useState, Component } from "react"
import { AiOutlineSearch } from 'react-icons/ai'
import { Link, Redirect, useHistory, NavLink} from 'react-router-dom'
import { Form ,Col,  DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, List, Row, NavItem} from "reactstrap"
import { useDispatch, useSelector } from "react-redux"


import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown, FormControl, Button, Container, Dropdown } from 'react-bootstrap';

import "./Header.scss"


class Header extends Component{
    stickHeader = () => {
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
    };
    activeDropdown =() =>{
        window.onload = () => {
        var navDropdown = document.getElementsByClassName("nav-dropdown");
        for(let nD of navDropdown){
            let navItem = nD.getElementsByClassName("nav-link");
            for(let nI of navItem){
                if(nI.classList.contains("nav-link-active")){
                    nD.classList.add("nav-link-active");
                }
                break;
            }
        }
    }

    }
    componentDidMount(){
        this.stickHeader();
        this.activeDropdown();
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
                            <NavLink exact to="/home" className="nav-link" activeClassName="nav-link-active">Trang chủ</NavLink>
    
                            <NavLink exact to="/introduction" className="nav-link" activeClassName="nav-link-active">Giới thiệu</NavLink>

                            <NavDropdown className="nav-dropdown" title="Sản phẩm">
                                <NavLink to="/game" className="nav-link" activeClassName="nav-link-active">Game</NavLink>
                                {/* <NavDropdown.Item href="game">Game</NavDropdown.Item> */}
                                {/* <NavDropdown.Divider /> */}
                                <NavLink to="/software" className="nav-link" activeClassName="nav-link-active">Software</NavLink>
                                {/* <NavDropdown.Item href="socialapp">Social app</NavDropdown.Item> */}
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="product/pricing">Bảng giá</NavDropdown.Item> */}
                            </NavDropdown>                           
    
                            <NavDropdown className="nav-dropdown" title="Tin tức">
                                <NavLink to="/news" className="nav-link" activeClassName="nav-link-active">Tin tức</NavLink>
                                <NavLink to="/events" className="nav-link" activeClassName="nav-link-active">Sự kiện</NavLink>
                            </NavDropdown>
    
                            <NavDropdown className="nav-dropdown" title="Kết nối">
                                <NavLink to="/contact" className="nav-link" activeClassName="nav-link-active">Liên hệ</NavLink>
                                <NavLink to="/aboutus" className="nav-link" activeClassName="nav-link-active">Chúng tôi</NavLink>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>    
            </Navbar>
        )
    }
} 

export default Header