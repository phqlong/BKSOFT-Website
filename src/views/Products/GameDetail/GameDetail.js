import { useState } from "react"
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, List, Row } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, FormControl, Button, Container, Card, Form, Pagination, Breadcrumb } from 'react-bootstrap';
import Banner from "../../../components/Banner"
import "./GameDetail.css"
import { FiUser,FiUsers } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";
const GameDetail =()=> {
    return(
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="/home" >Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item >Game</Breadcrumb.Item>
                <Breadcrumb.Item active>View Game</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col lg="3">
                    <img src="https://www.gameloft.com/assets/game/overdrive-city/dist/images/landing/car1.jpg"></img> 
                </Col>
                <Col lg="6" className="align-left">
                    <h1>Over Drive City</h1>
                    <p>Build your ultimate car city where creativity spans from the factory floor to the fast lane, build 
                        and collect your favorite car, Assemble car showrooms, construct factories, and craft custom roadways.
                        Put the pedal to the metal in a 6-chapter Career mode and in Race Trials.</p>
                </Col>
                    
                <Col>
                    <p><FiUser /> Single-Player </p>
                    <p><FiUsers /> Multi-Player </p>
                    <p><BsSun /> Achievements </p>
                    <p><AiFillCloud /> Cloud Saves </p>
                </Col>
            </Row>
            <Row>
                <Col lg="3" className="">
                    <p>Developer: <b>LeNgocHieu</b><br/>
                    Publisher: <b>LeNgocHieu</b> <br/>
                    Release Date: <b>6/5/2021</b></p>
                </Col>
                <Col>
                    <Button class="button-buy" size="lg" variant="success">Click to buy</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default GameDetail