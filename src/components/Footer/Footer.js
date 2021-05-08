import { Col, Row, Container } from "reactstrap"

import 'bootstrap/dist/css/bootstrap.min.css';

import {FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa"

import "./Footer.css"
import "./Footer.scss"

// const Footer = () => {
//     return (
//         <section className="Footer">
//             <Row>
//                 <Col>
//                     <h1 className="Footer__brand"><a href="/home">BKSOFT</a></h1>
//                     <h6><a href="/contact">Contact us</a></h6>
//                     <h6><a href="/aboutus">About us</a></h6>
//                 </Col>

//                 <Col className="Footer__icons">
//                     <a href="#" className="icon"> <FaFacebook size="30px" /> </a>
//                     <a href="#" className="icon"> <FaYoutube size="30px" /> </a>
//                     <a href="#" className="icon"> <FaInstagram size="30px" /> </a>
//                 </Col>
//             </Row>

//             <h6 className="Footer__copyright"> Copyright © 2021-2031 <a href="/home">BKSOFT</a> | All rights reserved</h6>
//         </section>
//     )
// }

const Footer = () => {
    return (
            <Container fluid id="footer">
                <Row>
                    <Col lg={3} id="footer-name">
                        <h2 className="Footer-brand"><a href="/home">BKSOFT</a></h2>
                    </Col>
                    <Col lg={3} id="footer-info">
                        <h5>Liên hệ</h5>
                        <hr></hr>
                        <div id="footer-info-email">
                            <h6>
                                <i class="icofont-envelope"></i>
                                <a href="mailto:phqlong2810@gmail.com"> info@bksoft.com.vn</a>
                            </h6>
                        </div>

                        <div id="footer-info-phone">
                            
                            <h6>
                                <i class="icofont-phone"></i>
                                <a href="tel:+84 082 999 8922"> +84 082 999 8922</a>
                            </h6>
                        </div>

                        <div id="footer-info-address">
                            <h6> 
                                <i className="icofont-location-pin"></i>
                                <p> H6, HCMUT</p>
                            </h6>
                        </div>
                    </Col>
                    <Col lg={3} id="footer-links">
                        <h5>Về chúng tôi</h5>
                        <hr></hr>
                        <div>
                            <h6>
                                <a href="introduction">Giới thiệu</a>
                            </h6>
                        </div>
                        <div>
                            <h6>
                                <a href="game">Game</a>
                            </h6>
                        </div>
                        <div>
                            <h6>
                                <a href="events">Sự kiện</a>
                            </h6>
                        </div>
                    
                    </Col>

                    <Col lg={3} id="footer-social">
                        <h5>Theo dõi</h5>
                        <hr></hr>
                        <div id="footer-social-list">
                            <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebook/></a>
                            <a href="https://vn.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                            <a href="https://github.com/phqlong/Web-assignment" target="_blank" rel="noreferrer"><FaGithub/></a>
                        </div>
                    </Col>
                </Row>
                <h5 id="footer-copyright"> Copyright © 2021-2031 <a href="/home">BKSOFT</a> | All rights reserved</h5>    
            </Container>
    )
}

export default Footer