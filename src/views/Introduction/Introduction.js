import { Col, Row, Container } from "reactstrap"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, Button, Carousel, Jumbotron, Card } from 'react-bootstrap';

import intro1 from "../../assets/img/intro1.jpg"
import intro2 from "../../assets/img/intro2.png"
import intro3 from "../../assets/img/intro3.jpg"
import intro4 from "../../assets/img/intro4.jpg"
import game_icon from "../../assets/img/game_icon.png"
import software_icon from "../../assets/img/software_icon.png"
import Banner from "../../components/Banner"

import './Introduction.css'

const Introduction = () => {
    return (
        <section className="Introduction">
            <Banner
                title="</> Chúng tôi là BKSoft"
                content="Thành lập ngày 6/9/2000, BKSoft hiện là một trong những công ty internet và dịch vụ công nghệ lớn nhất Việt Nam."
            >
            </Banner>

            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="/home" >Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item active style={{ color: "white" }}>Giới thiệu</Breadcrumb.Item>

                </Breadcrumb>

                <section className="s-aboutus">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={intro1}
                                alt="First"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={intro2}
                                alt="Second"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={intro3}
                                alt="Third"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={intro4}
                                alt="Fourth"
                            />
                        </Carousel.Item>

                    </Carousel>
                </section>

                <section className="s-products">
                    <Jumbotron>
                        <h1>Sản phẩm</h1>
                        <hr></hr>
                        <p>Lĩnh vực hoạt động của BKSoft tập trung vào 2 nhóm sản phẩm chủ lực, đó là trò chơi trực tuyến và các dịch vụ công nghệ.</p>

                        <Row>
                            <Col sm={12} md={6}>
                                <Card>
                                    <Card.Header>
                                        <h3>BK Games</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <img src={game_icon} alt="game_icon"></img>
                                        <Card.Text>
                                            BKSoft là một trong các đơn vị phát hành các tựa game từ thị trường quốc tế tại Việt Nam hoặc phát
                                            hành các tựa game Việt Nam ra thị trường quốc tế.
                                            Đến nay, BKSoft Games đã tích lũy được nhiều sản phẩm trò chơi hấp dẫn và hiện có đến 4 Studio vận hành game.
                                        </Card.Text>
                                        <Button variant="primary"><a href="/game">Xem ngay</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col sm={12} md={6}>
                                <Card>
                                    <Card.Header>
                                        <h3>BK Software</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <img src={software_icon} alt="software_icon"></img>
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