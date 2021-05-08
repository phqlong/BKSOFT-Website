import {Component } from "react"


import 'bootstrap/dist/css/bootstrap.min.css';

import "./ScrollTop.css"


class ScrollTop extends Component{
    componentDidMount(){
        const scrollTop = document.getElementById("scroll-top");
        scrollTop.addEventListener("click", () =>{
            window.scrollTo(0,0);
        })
    }
    render(){
        return (
            <i id="scroll-top" className="icofont-rounded-up"></i>       
        )
    }
}

export default ScrollTop