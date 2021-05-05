import { useState } from "react"
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Form ,Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, List, Row } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown, FormControl, Button } from 'react-bootstrap';

import {FaFacebook, FaYoutube, FaInstagram} from "react-icons/fa"

import "./Footer.css"

const Footer = () => {
    return (
        <section className="Footer">
            <Row>
                <Col>
                    <h1 className="Footer__brand"><a href="/home">BKSOFT</a></h1>
                    <h6><a href="/contact">Contact us</a></h6>
                    <h6><a href="/aboutus">About us</a></h6>
                </Col>

                <Col className="Footer__icons">
                    <a href="#" className="icon"> <FaFacebook size="30px" /> </a>
                    <a href="#" className="icon"> <FaYoutube size="30px" /> </a>
                    <a href="#" className="icon"> <FaInstagram size="30px" /> </a>
                </Col>
            </Row>

            <h6 className="Footer__copyright"> Copyright © 2021-2031 <a href="/home">BKSOFT</a> | All rights reserved</h6>

        </section>
    )
}


export default Footer