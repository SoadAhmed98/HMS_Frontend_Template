import React from 'react';


const TeamSection = () => {
    const teamMembers = [
        {
            name: 'Dr. Andria Jonea',
            designation: 'Cancer Specialist',
            image: 'images/resource/team-1.jpg',
            delay: '0ms',
            social: {
                facebook: '#',
                google: '#',
                twitter: '#',
                skype: '#',
                linkedin: '#'
            }
        },
        {
            name: 'Dr. Robet Samith',
            designation: 'Heart Surgeon',
            image: 'images/resource/team-2.jpg',
            delay: '250ms',
            social: {
                facebook: '#',
                google: '#',
                twitter: '#',
                skype: '#',
                linkedin: '#'
            }
        },
        {
            name: 'Dr. Sharon Laura',
            designation: 'Family Physician',
            image: 'images/resource/team-3.jpg',
            delay: '500ms',
            social: {
                facebook: '#',
                google: '#',
                twitter: '#',
                skype: '#',
                linkedin: '#'
            }
        },
        {
            name: 'Dr. Alex Furgosen',
            designation: 'Ortho Specialist',
            image: 'images/resource/team-4.jpg',
            delay: '750ms',
            social: {
                facebook: '#',
                google: '#',
                twitter: '#',
                skype: '#',
                linkedin: '#'
            }
        }
    ];

    return (
        <section className="team-section py-5">
            <div className="container">
                <div className="sec-title text-center mb-5">
                    <h2>The Medical Specialists</h2>
                    <div className="separator"></div>
                </div>
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-block col-lg-3 col-md-6 col-sm-12 mb-4">
                            <div className={`inner-box wow fadeInLeft`} data-wow-delay={member.delay} data-wow-duration="1500ms">
                                <div className="image">
                                    <img src={member.image} alt={member.name} className="img-fluid" />
                                    <div className="overlay-box">
                                        <ul className="social-icons list-inline">
                                            <li className="list-inline-item"><a href={member.social.facebook}><span className="fab fa-facebook-f"></span></a></li>
                                            <li className="list-inline-item"><a href={member.social.google}><span className="fab fa-google"></span></a></li>
                                            <li className="list-inline-item"><a href={member.social.twitter}><span className="fab fa-twitter"></span></a></li>
                                            <li className="list-inline-item"><a href={member.social.skype}><span className="fab fa-skype"></span></a></li>
                                            <li className="list-inline-item"><a href={member.social.linkedin}><span className="fab fa-linkedin-in"></span></a></li>
                                        </ul>
                                        <a href="#" className="appointment btn btn-primary">Make Appointment</a>
                                    </div>
                                </div>
                                <div className="lower-content text-center mt-3">
                                    <h3><a href="#">{member.name}</a></h3>
                                    <div className="designation">{member.designation}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
