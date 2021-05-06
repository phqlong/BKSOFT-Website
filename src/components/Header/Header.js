import { useState } from "react"
import { AiOutlineSearch } from 'react-icons/ai'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Form ,Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, List, Row } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown, FormControl, Button, Container } from 'react-bootstrap';

import "./Header.css"


const Header = () => {

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
                            <NavDropdown.Item href="software">Software</NavDropdown.Item>
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


export default Header