import React from 'react';
import CountUp from 'react-countup';

const CounterSection = () => {
    const counters = [
        { icon: 'flaticon-logout', count: 2350, title: 'Satisfied Patients', delay: 5 },
        { icon: 'flaticon-logout', count: 350, title: 'Doctor’s Team', delay: 305, prefix: '+' },
        { icon: 'flaticon-logout', count: 2150, title: 'Success Mission', delay: 605 },
        { icon: 'flaticon-logout', count: 225, title: 'Successful Surgeries', delay: 905, prefix: '+' },
    ];

    return (
        <section className="counter-section style-two" style={{ backgroundImage: 'url(images/background/pattern-3.png)' }}>
            <div className="auto-container">
                <div className="fact-counter style-two">
                    <div className="row clearfix">
                        {counters.map(({ icon, count, title, delay, prefix = '' }, index) => (
                            <div className="column counter-column col-lg-3 col-md-6 col-sm-12" key={index}>
                                <div className="inner wow fadeInLeft" data-wow-delay={`${delay}ms`} data-wow-duration="1500ms">
                                    <div className="content">
                                        <div className={`icon ${icon}`}></div>
                                        <div className="count-outer count-box">
                                            {prefix}
                                            <CountUp 
                                                start={0} 
                                                end={count} 
                                                duration={2.5} 
                                                delay={delay / 1000} 
                                            />
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
