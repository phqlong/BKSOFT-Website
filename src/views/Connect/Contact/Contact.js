import { useState } from "react"
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupAddon, List, Row } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, FormGroup, FormControl, Button, Breadcrumb, Container, Card, Jumbotron } from 'react-bootstrap';

import Icofont from 'react-icofont';

import Banner from "../../../components/Banner"
import "./contact.scss";


const Contact = () => {
    return (
        <section id="Contact" class="Contact">
            <Banner
                title="</> Kết nối với BKSOFT"
                content="Liên hệ với chúng tôi bất cứ khi nào!" />

            <Container>

                <Breadcrumb>
                    <Breadcrumb.Item href="/home">Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item active style={{ color: 'white' }}>Liên hệ</Breadcrumb.Item>
                </Breadcrumb>

                <Row>
                    <Col className="info" lg={true}>
                        <div class="info__email">
                            <h4 style={{ color: "goldenrod" }}>
                                <i class="icofont-envelope"> </i>
                                Email:
                            </h4>
                            <a href="mailto:phqlong2810@gmail.com">info@bksoft.com.vn</a>
                        </div>

                        <div class="info__phone">
                            <h4 style={{ color: "goldenrod" }}>
                                <i class="icofont-phone"> </i>
                                Điện thoại:
                            </h4>
                            <a href="tel:+84 082 999 8922">+84 082 999 8922</a>
                        </div>

                        <div class="info__address">
                            <h4 style={{ color: "goldenrod" }}>
                                <i className="icofont-location-arrow"> </i>
                                Địa chỉ:
                            </h4>
                            <p style={{ color: "white" }}>Tòa H6, Đại học Bách khoa HCM, Dĩ An, Bình Dương</p>
                            <iframe
                                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJf5mMVqXYdDERDG4WevEFrN4&key=AIzaSyCLy-jNKbq2TcDSCRoYbqE8zM_ehxFUAI4"
                                frameborder="0"
                                allowfullscreen>
                            </iframe>
                        </div>
                    </Col>

                    <Col className="form" lg={true}>
                        <Jumbotron>

                            <Form>
                                <Form.Group controlId="form__email">
                                    <Row>
                                        <Col>
                                            <Form.Label>Tên của bạn:</Form.Label>
                                            <Form.Control type="name" placeholder="Tên của bạn" />
                                        </Col>

                                        <Col>
                                            <Form.Label>Địa chỉ email:</Form.Label>
                                            <Form.Control type="email" placeholder="email@gmail.com" />
                                        </Col>
                                    </Row>
                                    <Form.Text className="text-muted">
                                        Chúng tôi sẽ không bao giờ chia sẽ thông tin cá nhân của bạn!
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="form__title">
                                    <Form.Label>Tiêu đề:</Form.Label>
                                    <Form.Control type="title" placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="form__content">
                                    <Form.Label>Nội dung:</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.File
                                        id="custom-file-translate-scss"
                                        label="Đính kèm file"
                                        lang="en"
                                        custom
                                    />
                                </Form.Group>

                                <Button variant="warning" size="lg" type="submit">
                                    Gửi
                                </Button>
                            </Form>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Contact