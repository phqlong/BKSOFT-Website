import { useState } from "react"
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Form, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, List, Row } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, FormControl, Button, Container, Carousel, Card } from 'react-bootstrap';

import "./news.css"
import new1 from "../../../assets/img/new1.jpg"
import new2 from "../../../assets/img/new2.jpg"
import new3 from "../../../assets/img/new3.jpg"

const News = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Container>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={new1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={new2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={new3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <Row>
                <Col lg={true}>
                    <Card>
                        <Card.Img variant="top" src={new1} />
                        <Card.Body>
                            <Card.Title>
                                Minathon 2021
                            </Card.Title>
                            <Card.Text>
                                BKSoft là đơn vị đồng hành cùng cuộc thi sáng tạo giải pháp công nghệ Minathon 2021...
                            </Card.Text>
                            <div className="text-muted">
                                20-03-2021
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://www.facebook.com/BKCSE.Multimedia/posts/4347451018615342/">Xem thêm</a>
                        </Card.Footer>
                    </Card>
                    <br />
                </Col>

                <Col lg={true}>
                    <Card>
                        <Card.Img variant="top" src={new2} />
                        <Card.Body>
                            <Card.Title>Top 5 game hay nhất</Card.Title>
                            <Card.Text>
                                Theo thống kê của hiệp hội thể thao điện tử Việt Nam (VRESA), tựa game Tree Story lọt top 5...
                            </Card.Text>
                            <div className="text-muted">
                                25-02-2021
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <a href="http://viresa.org.vn/">Xem thêm</a>
                        </Card.Footer>
                    </Card>
                    <br />
                </Col>

                <Col lg={true}>
                    <Card>
                        <Card.Img variant="top" src={new3} />
                        <Card.Body>
                            <Card.Title>Tăng trưởng vượt bậc</Card.Title>
                            <Card.Text>
                                BKSoft vừa công bố doanh thu thuần năm 2020 đạt hơn 1.000 tỷ VND, tăng gần 14% so với...
                            </Card.Text>
                            <div className="text-muted">
                                23-01-2021
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://www.vng.com.vn/news/news/vng-cong-bo-dau-tu-manh-cho-startup.html">Xem thêm</a>
                        </Card.Footer>
                    </Card>
                    <br />
                </Col>
            </Row>
        </Container>

    )
}


export default News