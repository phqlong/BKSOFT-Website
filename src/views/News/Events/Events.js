import { useState } from "react"
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Form, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, List, Row } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, Container, Carousel, Card } from 'react-bootstrap';

import "./events.css"
import event1 from "../../../assets/img/event1.jpg"
import event2 from "../../../assets/img/event2.jpg"
import event3 from "../../../assets/img/event3.jpg"

const Events = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container className="Events">
            <Breadcrumb>
                <Breadcrumb.Item href="/home" >Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "white" }}>Sự kiện</Breadcrumb.Item>
            </Breadcrumb>

            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={event1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 style={{ color: "white" }}>Giảm giá đến 60% tất cả các game duy nhất tuần này!</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={event2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h5 style={{ color: "blue" }}>Sự kiện Game event duy nhất trong năm!</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={event3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h5 style={{ color: "white" }}>Hội thảo công nghệ lớn nhất năm!</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Row>
                <Col lg={true}>
                    <Card>
                        <Card.Img variant="top" src={event1} />
                        <Card.Body>
                            <Card.Title>Giảm giá đặc biệt</Card.Title>
                            <Card.Text>
                                Giảm giá đến 60% tất cả các game duy nhất tuần này!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="/game">Mua ngay</a>
                        </Card.Footer>
                    </Card>
                    <br />
                </Col>

                <Col lg={true}>
                    <Card>
                        <Card.Img variant="top" src={event2} />
                        <Card.Body>
                            <Card.Title>Hội chợ Game</Card.Title>
                            <Card.Text>
                                Sự kiện về Game duy nhất trong năm!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="/game">Tham gia ngay</a>
                        </Card.Footer>
                    </Card>
                    <br />
                </Col>

                <Col lg={true}>
                    <Card>
                        <Card.Img variant="top" src={event3} />
                        <Card.Body>
                            <Card.Title>Diễn đàn công nghê</Card.Title>
                            <Card.Text>
                                Diễn đàn thường niên vê công nghệ!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="/socialapp">Tham gia ngay</a>
                        </Card.Footer>
                    </Card>
                    <br />
                </Col>
            </Row>
        </Container>
    )
}


export default Events