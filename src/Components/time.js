import React from 'react';

const Time = () => {
    return (
        <>
            <section className="default-section" style={{ backgroundImage: "url(images/background/4.jpg)" }}>
                <div className="auto-container">
                    <div className="row clearfix">

                        {/* Skill Column */}
                        <div className="skill-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Sec Title */}
                                <div className="sec-title">
                                    <h2>MediTech Medical Skills</h2>
                                    <div className="separator"></div>
                                </div>

                                {/* Progress Levels */}
                                <div className="progress-levels">

                                    {/* Skill Box */}
                                    <div className="progress-box wow">
                                        <div className="inner count-box">
                                            <div className="bar">
                                                <div className="bar-innner">
                                                    <div className="bar-fill" data-percent="90">
                                                        <div className="skill-percent">
                                                            <span className="count-text" data-speed="3000" data-stop="95">0</span>
                                                            <span className="percent">%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text">Patient Care</div>
                                        </div>
                                    </div>

                                    {/* Skill Box */}
                                    <div className="progress-box wow">
                                        <div className="inner count-box">
                                            <div className="bar">
                                                <div className="bar-innner">
                                                    <div className="bar-fill" data-percent="45">
                                                        <div className="skill-percent">
                                                            <span className="count-text" data-speed="3000" data-stop="45">0</span>
                                                            <span className="percent">%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text">Medical Assistance</div>
                                        </div>
                                    </div>

                                    {/* Skill Box */}
                                    <div className="progress-box wow">
                                        <div className="inner count-box">
                                            <div className="bar">
                                                <div className="bar-innner">
                                                    <div className="bar-fill" data-percent="85">
                                                        <div className="skill-percent">
                                                            <span className="count-text" data-speed="3000" data-stop="85">0</span>
                                                            <span className="percent">%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text">Patient Preparation</div>
                                        </div>
                                    </div>

                                    {/* Skill Box */}
                                    <div className="progress-box wow">
                                        <div className="inner count-box">
                                            <div className="bar">
                                                <div className="bar-innner">
                                                    <div className="bar-fill" data-percent="70">
                                                        <div className="skill-percent">
                                                            <span className="count-text" data-speed="3000" data-stop="70">0</span>
                                                            <span className="percent">%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text">Electronic Aspirin</div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* Timeline Column */}
                        <div className="timeline-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Sec Title */}
                                <div className="sec-title">
                                    <h2>Check Weekly Timetable</h2>
                                    <div className="separator"></div>
                                </div>
                                <div className="text">Suspendisse potenti. Maecenas dapibus ac tellus sed pulvinar. Vestibulum bib volutpat accumsan non laoreet nulla luctus...</div>
                                <ul className="timeline-list">
                                    <li>Monday - Friday <span>8.00 - 18.00</span></li>
                                    <li>Saturday <span>9.00 - 16.00</span></li>
                                    <li>Sunday <span>9.00 - 16.00</span></li>
                                </ul>
                                <div className="btn-box">
                                    <a className="theme-btn timeline-btn" href="#"><span className="icon flaticon-doctor"></span> Doctors Time Table</a>
                                    <a className="theme-btn timeline-btn" href="#"><span className="icon flaticon-doctor"></span> Make Appointment</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Time;
