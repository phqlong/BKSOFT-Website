import { useState , Component} from "react";
import Header from "../../components/Header/Header";
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
                <Jumbotron id="home-title">
                    <div id="home-title-content">
                        <h1>BKS0FT</h1>
                        <h2>Society and Gaming</h2>
                        <p>
                            <a href="introduction">
                                <Button>Giới thiệu</Button>
                            </a>
                        </p>
                    </div>
                </Jumbotron>
                <Header />
            </section>
        );
    }
}
export default Home;
