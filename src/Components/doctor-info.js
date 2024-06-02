import React from 'react';

const DoctorInfoSection = () => {
    const doctorBlocks = [
        {
            title: 'Working Hours',
            content: (
                <ul className="doctor-time-list">
                    <li>Mon–Fri <span>8:00am–7:00pm</span></li>
                    <li>Saturday <span>9:00am–5:00pm</span></li>
                    <li>Sunday <span>9:00am–3:00pm</span></li>
                </ul>
            ),
            additional: (
                <>
                    <h4>Emergency Cases</h4>
                    <div className="phone">Call us! <strong>+898 68679 575 09</strong></div>
                </>
            ),
            animation: 'fadeInLeft',
        },
        {
            title: 'Doctors Timetable',
            content: (
                <div className="text">
                    The following is for guidance only to help you plan your appointment with a preferred doctor or nurse. It does not guarantee availability as the doctors or nurses may sometimes be attending to other duties.
                </div>
            ),
            additional: <a href="#" className="detail">More Detail</a>,
            animation: 'fadeInUp',
        },
        {
            title: 'Primary Health Care',
            content: (
                <div className="text">
                    When you know you are using your best talents for something you love, you can’t it. Effective communication is the basis for building brands as solid as the relationships we build with our clients.
                </div>
            ),
            additional: <a href="#" className="detail">Contact Now</a>,
            animation: 'fadeInRight',
        },
    ];

    return (
        <section className="doctor-info-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row clearfix">
                        {doctorBlocks.map((block, index) => (
                            <div className={`doctor-block col-lg-4 col-md-6 col-sm-12`} key={index}>
                                <div className={`inner-box wow ${block.animation}`} data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <h3>{block.title}</h3>
                                    {block.content}
                                    {block.additional}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DoctorInfoSection;
