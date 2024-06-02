import React from 'react';

const ButtomUp = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="scroll-to-top scroll-to-target" onClick={scrollToTop}>
            <span className="fa fa-angle-up"></span>
        </div>
    );
}

export default ButtomUp;
