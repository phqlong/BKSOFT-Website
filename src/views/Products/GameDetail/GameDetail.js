import { useState } from "react"
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, List, Row } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, FormControl, Button, Container, Card, Form, Pagination, Breadcrumb } from 'react-bootstrap';
import Banner from "../../../components/Banner"
import "./GameDetail.css"
import { FiUser, FiUsers } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";
const GameDetail = () => {
    return (
        <Container className="gamedetail">
        
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
                        <p>Xây dựng thành phố xe hơi của riêng bạn, nơi sự sáng tạo trải dài từ sàn nhà máy đến những đường đua, thiết kế và tìm kiếm những chiếc xe yêu thích của bạn.
                            Xây dựng các phòng trưng bày xe hơi, xây dựng nhà máy và tạo ra các con đường tùy thích. Đặt chân lên bàn đạp ở 6 chương trong chế độ Career và trong Race Trials. </p>
                    </Col>

                    <Col className="align-left">
                        <p><FiUser /> Một người chơi </p>
                        <p><FiUsers /> Nhiều người chơi </p>
                        <p><BsSun /> Thành tựu </p>
                        <p><AiFillCloud /> Lưu trữ đám mây </p>
                    </Col>
                </Row>
                <Row style={{paddingBottom:"50px"}}>
                    <Col lg="3" className="">
                        <p>Nhà phát triển: <b>LeNgocHieu</b><br />
                            Nhà phát hành: <b>LeNgocHieu</b> <br />
                            Ngày phát hành: <b>6/5/2021</b></p>
                    </Col>
                    <Col lg="6" className="button-buy">
                        <Button class="button-buy" size="lg" variant="success">Install on Window10</Button>
                    </Col>

                </Row>
          
        </Container>
    );
}

export default GameDetail