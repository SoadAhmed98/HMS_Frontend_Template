import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomeServices() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Fetch data from API
        axios.get(`https://b43c1a73-82c8-4103-8569-c1e7e6a160cd.mock.pstmn.io/services`)
            .then(res => {
                setServices(res.data);
            })
            .catch(err => console.log(err));
    }, []);

  
    const icons = [
        'flaticon-doctor-stethoscope',
        'flaticon-operating-room',
        'flaticon-van',
        'flaticon-water',
        'flaticon-pharmacy',
        'flaticon-nurse'
    ];

    return (
        <section className="services-section">
            <div className="auto-container">
                <div className="sec-title centered">
                    <h2>Best Health Services</h2>
                    <div className="separator"></div>
                </div>

                <div className="row clearfix">
                    {/* Left Column */}
                    <div className="left-column pull-left col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {services.slice(0, 3).map((service, index) => (
                                <div key={index} className="service-block">
                                    <div className="inner-box wow fadeInLeft" data-wow-delay={`${index * 250}ms`} data-wow-duration="1500ms">
                                        <div className="icon-box">
                                            <span className={`icon ${icons[index]}`}></span>
                                        </div>
                                        <h3><Link to="#">{service.name}</Link></h3>
                                        <div className="text">{service.description}<br/> Now place take it.</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Circles Column */}
                    <div className="circles-column col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="circles">
                                <div className="circle-one"></div>
                                <div className="circle-two"></div>
                                <div className="circle-three"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="right-column pull-right col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {services.slice(3, 6).map((service, index) => (
                                <div key={index} className="service-block-two">
                                    <div className="inner-box wow fadeInRight" data-wow-delay={`${index * 250}ms`} data-wow-duration="1500ms">
                                        <div className="icon-box">
                                            <span className={`icon ${icons[index + 3]}`}></span>
                                        </div>
                                        <h3><Link to="#">{service.name}</Link></h3>
                                        <div className="text">{service.description}<br/> Now place take it.</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeServices;
