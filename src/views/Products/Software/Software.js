import { Col, Row } from "reactstrap"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Form, Breadcrumb } from 'react-bootstrap';
import Banner from "../../../components/Banner"
import "./Software.css"
const SocialApp = () => {
    return (
        <>
            <div className="Software-bg">
                <Banner
                    title="</> Chúng ta không thể thay đổi tương lai nhưng phần mềm có thể tạo nên nó"
                    content="BKSoft với 20 năm kinh nghiệm xây dựng và phát triển phần mềm có thể chuyển tầm nhìn và ý thức kinh
                    doanh của bạn thành các sản phẩm có tác động cao trong tương lai."
                />
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/home" >Trang chủ</Breadcrumb.Item>
                        <Breadcrumb.Item active style={{color:"white"}}>Software</Breadcrumb.Item>
                    </Breadcrumb>
                    <Form>
                        <Row>
                            <Col xs="6" md="3">
                                <Form.Control className="form-select" as="select">
                                    <option hidden disabled selected>Industries</option>
                                    <option>Health Care</option>
                                    <option>Internet of Things</option>
                                    <option>Fin Tech</option>
                                    <option>eLearning</option>
                                    <option>Enterprise</option>
                                    <option>SmartHome</option>
                                    <option>Robotics</option>
                                    <option>Energy</option>
                                </Form.Control>
                            </Col>
                            <Col xs="6" md="3">
                                <Form.Control className="form-select" as="select">
                                    <option hidden disabled selected>Technologies</option>
                                    <option>Java</option>
                                    <option>Python</option>
                                    <option>.Net</option>
                                    <option>iOS</option>
                                    <option>JS</option>
                                    <option>Node.JS</option>
                                    <option>Android</option>
                                    <option>React</option>
                                    <option>Angular</option>
                                </Form.Control>
                            </Col>
                            <Col xs="6" md="3">
                                <Form.Control className="form-select" as="select">
                                    <option hidden disabled selected>Services</option>
                                    <option>Dedicated team</option>
                                    <option>Software Product Development</option>
                                    <option>Digital Transformation</option>
                                    <option>Web Portal</option>
                                    <option>Mobile Apps</option>
                                    <option>Cloud Solution</option>
                                </Form.Control>
                            </Col>
                            <Col xs="6" md="3">
                                <Form.Control className="form-select" type="text" placeholder="Search" />
                            </Col>
                        </Row>
                    </Form>
                    <Row>
                        <Col xs="12" sm="6" lg="3">
                            <Card className="card-game" >
                                <Card.Body>
                                    <img className="card-img" variant="top" src={require("../../../assets/img/logo_software1.PNG").default} alt="logo software 1"/>

                                    <Card.Footer className="name-software">BK Health Care</Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="12" sm="6" lg="3">
                            <Card className="card-game">
                                <Card.Body>
                                    <Card.Img className="card-img" variant="top" src={require("../../../assets/img/logo_software2.PNG").default} />
                                    <Card.Footer className="name-software">BK Smart Home</Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="12" sm="6" lg="3">
                            <Card className="card-game">
                                <Card.Body>
                                    <Card.Img className="card-img" variant="top" src={require("../../../assets/img/logo_software3.PNG").default} />
                                    <Card.Footer className="name-software">BK Media </Card.Footer>
                                </Card.Body>
                                {/* <h4>Spirit Roots</h4>
                        <p class="price"><span>450.000đ</span></p> */}
                            </Card>
                        </Col>
                        <Col xs="12" sm="6" lg="3">
                            <Card className="card-game">
                                <Card.Body>
                                    <Card.Img className="card-img" variant="top" src={require("../../../assets/img/logo_software4.PNG").default} />
                                    <Card.Footer className="name-software">BK Management</Card.Footer>
                                </Card.Body>
                                {/* <h4>Tiki Monkeys</h4>
                        <p class="price"><span>450.000đ</span></p> */}
                            </Card>
                        </Col>
                        <Col xs="12" sm="6" lg="3">
                            <Card className="card-game">
                                <Card.Body>
                                    <Card.Img className="card-img" variant="top" src={require("../../../assets/img/logo_software5.PNG").default} />
                                    <Card.Footer className="name-software">BK Security</Card.Footer>
                                </Card.Body>
                                {/* <h4>Pocket Climber</h4>
                        <p class="price"><span>450.000đ</span></p> */}
                            </Card>
                        </Col>
                        <Col xs="12" sm="6" lg="3">
                            <Card className="card-game">
                                <Card.Body>
                                    <Card.Img className="card-img" variant="top" src={require("../../../assets/img/logo_software6.PNG").default} />
                                    <Card.Footer className="name-software">BK Payment</Card.Footer>
                                </Card.Body>
                                {/* <h4>Almost A Hero</h4>
                        <p class="price"><span>450.000đ</span></p> */}
                            </Card>
                        </Col>
                        <Col xs="12" sm="6" lg="3">
                            <Card className="card-game">
                                <Card.Body>
                                    <Card.Img className="card-img" variant="top" src={require("../../../assets/img/logo_software7.PNG").default} />
                                    <Card.Footer className="name-software">BK Database</Card.Footer>
                                </Card.Body>
                                {/* <h4>Pikamon</h4>
                        <p class="price"><span>450.000đ</span></p> */}
                            </Card>
                        </Col>
                    </Row>



                </Container>
            </div>
        </>

    )
}


export default SocialApp