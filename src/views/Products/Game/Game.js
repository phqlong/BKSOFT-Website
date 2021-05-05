import { useState } from "react"
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Form ,Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, List, Row } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown, FormControl, Button,Container,Card} from 'react-bootstrap';
import "./Game.css"
import img1 from "./logo/logo_pikamon.png" 

const Game = () => {
    return (
        <>
        <div className="bg">
        <Container>
            <h2>Trò chơi trực tuyến</h2>
            <ul>
                <li className="align-left">Phát triển và sản xuất trò chơi trực tuyến, phát hành ra thị trường quốc tế. 
                Sản phẩm:(Biệt đội môi trường, Almost a hero, Spirit Roots…).</li>
                <li className="align-left">Nhập khẩu và Phát hành các trò chơi nổi tiếng thế giới. 
                Sản phẩm: Tiki monkeys, Tree Story, Monsters &amp; Titans…</li>
            </ul>
            
            <Row>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                        <Card.Img className="card-img"  variant="top" src={require('./logo/SeekPng.png').default} />
                        <h4>Tree Story</h4>
                        <p class="price"><span>450.000đ</span></p>
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                        <Card.Img className="card-img"  variant="top" src={require('./logo/PiffleLogo.png').default} />
                        <h4>Piffle</h4>
                        <p class="price"><span>450.000đ</span></p>
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                        <Card.Img className="card-img"  variant="top" src={require('./logo/logo_spirit.png').default} />
                        <h4>Spirit Roots</h4>
                        <p class="price"><span>450.000đ</span></p>
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                        <Card.Img className="card-img"  variant="top" src={require('./logo/logo_tikimonkeys.png').default} />
                        <h4>Tiki Monkeys</h4>
                        <p class="price"><span>450.000đ</span></p>
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                        <Card.Img className="card-img"  variant="top" src={require('./logo/logo_pocketclimber.png').default} />
                        <h4>Pocket Climber</h4>
                        <p class="price"><span>450.000đ</span></p>
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                        <Card.Img className="card-img"  variant="top" src={require('./logo/logo_almostahero.png').default} />
                        <h4>Almost A Hero</h4>
                        <p class="price"><span>450.000đ</span></p>
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                        <Card.Img className="card-img"  variant="top" src={require('./logo/logo_pikamon.png').default} />
                        <h4>Pikamon</h4>
                        <p class="price"><span>450.000đ</span></p>
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                        <Card.Img className="card-img" variant="top" src={require('./logo/logo_bietdoimoitruong.png').default} />
                        <h4>Biệt đội môi trường</h4>
                        <p class="price"><span>450.000đ</span></p>
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                        <Card.Img className="card-img"  variant="top" src={require('./logo/logo_monsterstitans.png').default} />
                        <h4>Monsters &amp; Titans</h4>
                        <p class="price"><span>450.000đ</span></p>
                    </Card>
                </Col>
            </Row>
            
        </Container>
        </div>
        </>

    );
}


export default Game