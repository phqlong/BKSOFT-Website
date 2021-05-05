import { useState } from "react"
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Form ,Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, List, Row, Container } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown, FormControl, Button } from 'react-bootstrap';

import {FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"

import "./Footer.css"
import "./Footer.scss"

// const Footer = () => {
//     return (
//         <section className="Footer">
//             <Row>
//                 <Col>
//                     <h1 className="Footer__brand"><a href="/home">BKSOFT</a></h1>
//                     <h6><a href="/contact">Contact us</a></h6>
//                     <h6><a href="/aboutus">About us</a></h6>
//                 </Col>

//                 <Col className="Footer__icons">
//                     <a href="#" className="icon"> <FaFacebook size="30px" /> </a>
//                     <a href="#" className="icon"> <FaYoutube size="30px" /> </a>
//                     <a href="#" className="icon"> <FaInstagram size="30px" /> </a>
//                 </Col>
//             </Row>

//             <h6 className="Footer__copyright"> Copyright © 2021-2031 <a href="/home">BKSOFT</a> | All rights reserved</h6>
//         </section>
//     )
// }

const Footer = () => {
    return (
            <Container fluid id="footer">
                <Row>
                    <Col lg={2} id="footer-name">
                        <h1 className="Footer-brand"><a href="/home">BKSOFT</a></h1>
                    </Col>
                    <Col lg={4} id="footer-info">
                        <h3>Liên hệ</h3>
                        <hr></hr>
                        <div id="footer-info-email">
                            <h4>
                                <i class="icofont-envelope"></i>
                                <a href="mailto:phqlong2810@gmail.com"> info@bksoft.com.vn</a>
                            </h4>
                        </div>

                        <div id="footer-info-phone">
                            
                            <h4>
                                <i class="icofont-phone"></i>
                                <a href="tel:+84 082 999 8922"> +84 082 999 8922</a>
                            </h4>
                        </div>

                        <div id="footer-info-address">
                            <h4> 
                                <i className="icofont-location-pin"></i>
                                <p> H6, HCMUT</p>
                            </h4>
                        </div>
                    </Col>
                    <Col lg={3} id="footer-links">
                        <h3>Về chúng tôi</h3>
                        <hr></hr>
                        <div>
                            <h4>
                                <a href="introduction">Giới thiệu</a>
                            </h4>
                        </div>
                        <div>
                            <h4>
                                <a href="game">Game</a>
                            </h4>
                        </div>
                        <div>
                            <h4>
                                <a href="events">Sự kiện</a>
                            </h4>
                        </div>
                    
                    </Col>

                    <Col lg={3} id="footer-social">
                        <h3>Theo dõi</h3>
                        <hr></hr>
                        <div id="footer-social-list">
                            <a href="#"><FaFacebook/></a>
                            <a href="#"><FaLinkedin/></a>
                            <a href="https://github.com/phqlong/Web-assignment"><FaGithub/></a>
                        </div>
                    </Col>
                </Row>
                <h6 id="footer-copyright"> Copyright © 2021-2031 <a href="/home">BKSOFT</a> | All rights reserved</h6>    
            </Container>
    )
}

export default Footer