import { useState } from "react"
import { AiOutlineSearch } from 'react-icons/ai'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Form ,Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, List, Row } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown, FormControl, Button, Container } from 'react-bootstrap';

import "./ScrollTop.css"

const ScrollTop = () => {
    return(
        <i id="scroll-top" className="icofont-arrow-up"></i>
    );
}

export default ScrollTop