import { useState } from "react"
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, List, Row } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown, FormControl, Button,Container,Card,Form,Pagination} from 'react-bootstrap';
import "./Game.css"
import Banner from "../../../components/Banner"
import img1 from "./logo/logo_pikamon.png" 

const Game = () => {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }
    return (
        <>
        <div className="bg">
        <Banner 
            title="</> Trò chơi trực tuyến" 
            content="Phát triển và sản xuất trò chơi trực tuyến, phát hành ở thị trường trong nước và tung ra thị trường quốc tế."
        />
        <Container>
            <Form>
                
            <Row>
                <Col xs="6" md="3">
                    <Form.Control className="form-select" as="select">
                        <option hidden disabled selected>Genres</option>
                        <option>Puzzle</option>
                        <option>Racing</option>
                        <option>Runner</option>
                        <option>Sport</option>
                    </Form.Control>
                </Col>
                <Col xs="6" md="3">
                    <Form.Control className="form-select" as="select">
                        <option hidden disabled selected>Platforms</option>
                        <option>IOS</option>
                        <option>Android</option>
                        <option>Window Phone</option>
                        <option>Window PC</option>
                    </Form.Control>
                </Col>
                <Col xs="6" md="3">
                    <Form.Control className="form-select" as="select">
                        <option hidden disabled selected>Sort by</option>
                        <option>Name</option>
                        <option>Popularity</option>
                        <option>Release day</option>
                    </Form.Control>
                </Col>
                <Col xs="6" md="3">
                    <Form.Control className="form-select" type="text" placeholder="Search"/>
                </Col>
            </Row>
            </Form>
            <Row>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                        <Card.Body>
                            <Card.Img className="card-img"  variant="top" src="https://mkt-web.gameloft.com/static/83a75e971777052e179374fb3c48cbb2.jpg" />
                            <Card.Title>The Oregon Trail</Card.Title>
                            <Button variant="primary">View Game</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="6" md="4">
                    <Card className="card-game">
                        <Card.Body>
                            <Card.Img className="card-img"  variant="top" src="https://mkt-web.gameloft.com/static/1d4ff24b4b4f74f845891c1ae13dff51.png" />
                            <Card.Title>Song Pop 2</Card.Title>
                            <Button variant="primary">View Game</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                    <Card.Body>
                        <Card.Img className="card-img"  variant="top" src="https://mkt-web.gameloft.com/static/a98386a60fb7464611e56a665cd27bda.jpg" />
                        <Card.Title>Versus</Card.Title>
                        <Button variant="primary">View Game</Button>
                        </Card.Body>
                        {/* <h4>Spirit Roots</h4>
                        <p class="price"><span>450.000đ</span></p> */}
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                    <Card.Body>
                        <Card.Img className="card-img"  variant="top" src="https://mkt-web.gameloft.com/static/df8cd0bec21ddac93dcfc37a971233eb.jpg"/>
                        <Card.Title>Iron Blade</Card.Title>
                        <Button variant="primary">View Game</Button>
                        </Card.Body>
                        {/* <h4>Tiki Monkeys</h4>
                        <p class="price"><span>450.000đ</span></p> */}
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                    <Card.Body>
                        <Card.Img className="card-img"  variant="top" src="https://mkt-web.gameloft.com/static/73ef0055a5c8864503d0648f0252af82.jpg"/>
                        <Card.Title>Blitz Brigade</Card.Title>
                        <Button variant="primary">View Game</Button>
                        </Card.Body>
                        {/* <h4>Pocket Climber</h4>
                        <p class="price"><span>450.000đ</span></p> */}
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                    <Card.Body>
                        <Card.Img className="card-img"  variant="top" src="https://mkt-web.gameloft.com/static/59f80774d53aac7a84538bfa27dd664b.jpg" />
                        <Card.Title>GangStar New Orleans</Card.Title>
                        <Button variant="primary">View Game</Button>
                        </Card.Body>
                        {/* <h4>Almost A Hero</h4>
                        <p class="price"><span>450.000đ</span></p> */}
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                    <Card.Body>
                        <Card.Img className="card-img"  variant="top" src="https://mkt-web.gameloft.com/static/4f12102d488dab2d95cb70663915a098.png" />
                        <Card.Title>OverDrive City</Card.Title>
                        <Button variant="primary">View Game</Button>
                        </Card.Body>
                        {/* <h4>Pikamon</h4>
                        <p class="price"><span>450.000đ</span></p> */}
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                    <Card.Body>
                        <Card.Img className="card-img" variant="top" src="https://mkt-web.gameloft.com/static/cf9515bb93ebe803c6724182979762a8.jpg" />
                        <Card.Title>Linda Brown</Card.Title>
                        <Button variant="primary">View Game</Button>
                        </Card.Body>
                        {/* <h4>Biệt đội môi trường</h4>
                        <p class="price"><span>450.000đ</span></p> */}
                    </Card>
                </Col>
                <Col xs="6" md="4">   
                    <Card className="card-game">
                    <Card.Body>
                        <Card.Img className="card-img"  variant="top" src="https://mkt-web.gameloft.com/static/1990fa5cd427975ccac192f4d592df7e.jpg" />
                        <Card.Title>Ice Age Adventures</Card.Title>
                        <Button variant="primary">View Game</Button>
                        </Card.Body>
                        {/* <h4>Monsters &amp; Titans</h4>
                        <p class="price"><span>450.000đ</span></p> */}
                    </Card>
                </Col>
            </Row>
          
            <Pagination className="pagination">{items}</Pagination>
           
        </Container>
        </div>
        </>

    );
}


export default Game