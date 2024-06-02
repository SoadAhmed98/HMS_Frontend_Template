import React from 'react';

const CounterSection = () => {
    const counters = [
        { icon: 'flaticon-logout', count: 2350, title: 'Satisfied Patients', delay: '0ms' },
        { icon: 'flaticon-logout', count: 350, title: 'Doctor’s Team', delay: '300ms', prefix: '+' },
        { icon: 'flaticon-logout', count: 2150, title: 'Success Mission', delay: '600ms' },
        { icon: 'flaticon-logout', count: 225, title: 'Successful Surgeries', delay: '900ms', prefix: '+' },
    ];

    return (
        <section className="counter-section style-two" style={{ backgroundImage: 'url(images/background/pattern-3.png)' }}>
            <div className="auto-container">
                <div className="fact-counter style-two">
                    <div className="row clearfix">
                        {counters.map(({ icon, count, title, delay, prefix = '' }, index) => (
                            <div className="column counter-column col-lg-3 col-md-6 col-sm-12" key={index}>
                                <div className="inner wow fadeInLeft" data-wow-delay={delay} data-wow-duration="1500ms">
                                    <div className="content">
                                        <div className={`icon ${icon}`}></div>
                                        <div className="count-outer count-box">
                                            {prefix}<span className="count-text" data-speed="2500" data-stop={count}>0</span>
                                        </div>
                                        <h4 className="counter-title">{title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CounterSection;
