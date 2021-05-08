import { useState , Component} from "react";
import Header from "../../components/Header/Header";
import {Row, Col} from 'react-bootstrap';
import { Link, Redirect, useHistory } from "react-router-dom";
import {
    Jumbotron,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button,
} from "react-bootstrap";

import "./Home.scss";

import home1 from "../../assets/img/home1.png";
import home2 from "../../assets/img/home2.jpg";
import home3 from "../../assets/img/home3.jpg";

class Home extends Component {
    handleTogglerInHome = () => {
        const home = document.getElementById("home");
        const navbar = home.getElementsByClassName("navbar")[0];
        const toggler = home.getElementsByClassName("navbar-toggler")[0];
        const headerBrand = home.getElementsByClassName("header-brand")[0];
        const x = matchMedia("(max-width: 991px)");
        toggler.addEventListener("click", () => {
            if (toggler.classList.contains("collapsed")) {
                navbar.style.background = "white";
            } else {
                navbar.style.background = "none";
            }
        });

        const fixNav = (x) => {
            if (x.matches) {
                if (toggler.classList.contains("collapsed")) {
                    navbar.style.background = "none";
                } else {
                    navbar.style.background = "white";
                }

                headerBrand.style.display = "none";
            } else {
                navbar.style.background = "rgba(0, 0, 0, 0.3)";
                headerBrand.style.display = "block";
            }
        };
        fixNav(x);
        x.addListener(fixNav);
    };
    componentDidMount() {
        this.handleTogglerInHome();
    }
    render() {
        return (
            <section id="home">
                <Header />
                <Jumbotron id="home-title">
                    <div id="home-title-content">
                        <h1>BKSOFT</h1>
                        <h2>Software and Gaming</h2>
                        <p>
                            <Link to="/introduction">
                                <Button>Giới thiệu</Button>
                            </a>
                        </p>
                    </div>
                </Jumbotron>

                <div id="home-stats">
                        <div className="stat">
                            <div className="circle">
                                <p className="number">20</p>
                            </div>
                            <p className="stat-description">Năm kinh nghiệm</p>
                        </div>
                        <div className="stat">
                            <div className="circle">
                                <p className="number">40</p>
                            </div>
                            <p className="stat-description">Sản phẩm game</p>
                        </div>
                        <div className="stat">
                            <div className="circle">
                                <p className="number">7</p>
                            </div>
                            <p className="stat-description">Phần mềm phổ biến nhất</p>
                        </div>
                        <div className="stat">
                            <div className="circle">
                                <p className="number">2</p>
                            </div>
                            <p className="stat-description">Nhóm sản phẩm chủ lực</p>
                        </div>                    
                </div>
                
            </section>
        );
    }
}
export default Home;