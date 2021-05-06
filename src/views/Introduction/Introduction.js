import { useState } from "react"
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Form, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, List, Row, Container } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown, FormControl, Button, Carousel } from 'react-bootstrap';

import './Introduction.css'   
const Introduction = () => {
    return (
        <Container>
            <section class="s-aboutus">
                <h2>Chúng tôi là BKSoft</h2>
                <p>Thành lập ngày 6/9/2013, BKSoft hiện là một trong những công ty internet và dịch vụ công nghệ lớn nhất Việt Nam.</p>
            </section>

            <section class="s-products bg-carrot">

            </section>

            <section class="s-history bg-light ">

            </section>
        </Container>


    )
}


export default Introduction