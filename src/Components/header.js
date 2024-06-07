import React from 'react';
import { Link } from "react-router-dom";

function Header (props){
    return (
        <>
            <section className="page-title" style={{backgroundColor:"#004cd9"}}>
                <div className="auto-container">
                    <h1>{props.head}</h1>
                    <div className="text">{props.content}</div>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/"><span className="fas fa-home"></span> Home </Link></li>
                        <li>{props.place}</li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Header;
