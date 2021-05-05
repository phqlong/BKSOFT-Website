import { useState } from "react"
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupAddon, List, Row } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown, Form, FormGroup, FormControl, Button, Breadcrumb, Container, Card, Jumbotron } from 'react-bootstrap';

import "./aboutus.css";
import Banner from "../../../components/Banner"

import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"

const AboutUs = () => {
    let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";
    let iconStyles = { color: "white", fontSize: "1.5em" };

    return (
        <section id="team" class="team section-bg">
            <Banner 
                title="</> Chúng tôi là ai?" 
                content="Sứ mệnh của chúng tôi là giúp khách hàng đạt được những kết quả đáng kinh ngạc, biến ý tưởng của họ thành những sản phẩm có thể bán được trên thị trường."
            />

            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="/home">Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item active>Chúng tôi</Breadcrumb.Item>
                </Breadcrumb>
                <p>
                  Đội ngũ chúng tôi có 4 thành viên, đó là:
                </p>
                
                <Row>
                    <Col lg={true}>
                      <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                          <Card.Title>Phan Quốc Long</Card.Title>
                          <Card.Text>
                            Student's ID: 1810299 <br/>
                            Email: long.phan2810@hcmut.edu.vn
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <FaFacebook className="icon" href="#" />
                          <FaInstagram className="icon"/>
                          <FaLinkedin className="icon"/>
                        </Card.Footer>
                      </Card>
                    </Col>

                    <Col lg={true}>
                      <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                          <Card.Title>Nguyễn Trần Hoàn Duy</Card.Title>
                          <Card.Text>
                            Student's ID:  <br/>
                            Email: 
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <FaFacebook className="icon" href="#" />
                          <FaInstagram className="icon"/>
                          <FaLinkedin className="icon"/>
                        </Card.Footer>
                      </Card>
                    </Col>
                    
                    <Col lg={true}>
                      <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                          <Card.Title>Lê Ngọc Hiếu</Card.Title>
                          <Card.Text>
                            Student's ID:  <br/>
                            Email: 
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <FaFacebook className="icon" href="#" />
                          <FaInstagram className="icon"/>
                          <FaLinkedin className="icon"/>
                        </Card.Footer>
                      </Card>
                    </Col>

                    <Col lg={true}>
                    <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                          <Card.Title>Đinh Tiến Dũng</Card.Title>
                          <Card.Text>
                            Student's ID:  <br/>
                            Email:
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <FaFacebook className="icon" href="#" />
                          <FaInstagram className="icon"/>
                          <FaLinkedin className="icon"/>
                        </Card.Footer>
                      </Card>
                      <br />
                    </Col>

                </Row>


            </Container>
        </section>
    )
}


export default AboutUs