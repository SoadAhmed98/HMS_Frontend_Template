import React from 'react';
import { Link } from "react-router-dom";

function Header (props){
    return (
        <>
            <section className="page-title" style={{backgroundColor:"#004cd9"}}>
                <div className="auto-container ">
                    <div className="wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <h1>{props.head}</h1>
                    <div className="text">{props.content}</div>
                    </div>

                    <ul className="bread-crumb clearfix wow fadeInRight mt-2" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className='mt-5'>
                        <li><Link to="/"><span className="fas fa-home"></span> Home </Link></li>
                        <li>{props.place}</li>
                        </div>
                        
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Header;
