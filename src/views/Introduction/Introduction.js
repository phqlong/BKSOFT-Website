import { useState } from "react"
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Form, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, List, Row, Container } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, FormControl, Button, Carousel, Jumbotron, Card } from 'react-bootstrap';
import Banner from "../../components/Banner";
import intro1 from "../../assets/img/intro1.jpg"
import intro2 from "../../assets/img/intro2.png"
import intro3 from "../../assets/img/intro3.jpg"
import intro4 from "../../assets/img/intro4.jpg"
import game_icon from "../../assets/img/game_icon.png"
import software_icon from "../../assets/img/software_icon.png"

import './Introduction.css'

const Introduction = () => {
    return (
            <section class="s-aboutus">
                <Banner
                    id="s-aboutus-banner"
                    title="</>Chúng tôi là BKSoft"
                    content="Thành lập ngày 6/9/2000, BKSoft hiện là một trong những công ty internet và dịch vụ công nghệ lớn nhất Việt Nam."
                />
                <Container id="s-aboutus-content">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={intro1}
                            alt="First image"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={intro2}
                            alt="Second image"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={intro3}
                            alt="Third image"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={intro4}
                            alt="Four image"
                        />
                    </Carousel.Item>

                </Carousel>
                <section class="s-products">
                    <Jumbotron>
                        <h1>Sản phẩm</h1>
                        <hr></hr>
                        <p>Lĩnh vực hoạt động của BKSoft tập trung vào 2 nhóm sản phẩm chủ lực, đó là trò chơi trực tuyến và các dịch vụ công nghệ.</p>

                        <Row>
                            <Col sm="12" md="6">
                                <Card>
                                    <Card.Header>
                                        <h3>BK Games</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <img src={game_icon}></img>
                                        <Card.Text>
                                            BKSoft là một trong các đơn vị phát hành các tựa game từ thị trường quốc tế tại Việt Nam hoặc phát
                                            hành các tựa game Việt Nam ra thị trường quốc tế.
                                            Đến nay, BKSoft Games đã tích lũy được nhiều sản phẩm trò chơi hấp dẫn và hiện có đến 4 Studio vận hành game.
                                        </Card.Text>
                                        <Button variant="primary"><a href="/game">Xem ngay</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col sm="12" md="6">
                                <Card>
                                    <Card.Header>
                                        <h3>BK Software</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <img src={software_icon}></img>
                                        <Card.Text>
                                            <br></br>
                                            BKSoftware với các dịch vụ công nghệ hiện đại, đã phục vụ toàn diện nhu cầu giải trí của cá nhân,
                                            dịch vụ trung gian thanh toán theo xu hướng mới, và cung cấp
                                            các hệ thống, giải pháp công nghệ thông minh dựa trên kết nối Internet và công nghệ đám mây.
                                        </Card.Text>
                                        <Button variant="primary"><a href="/software">Xem ngay</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Jumbotron>

                </section>

                </Container>
                
            </section>

    )
}


export default Introduction