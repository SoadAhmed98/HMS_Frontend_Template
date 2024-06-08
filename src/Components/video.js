import React from 'react';

const VideoSection = () => {
    return (
        <section className="video-section" style={{ backgroundColor: '#004cd9' }}>
            <div className="auto-container">
                <div className="content">
                    <a 
                        href="https://www.youtube.com/watch?v=kxPCFljwJws" 
                        className="lightbox-image play-box" 
                        aria-label="Play Video"
                    >
                        <span className="flaticon-play-button">
                            <i className="ripple"></i>
                        </span>
                    </a>
                    <div className="text">WE ARE CARE ABOUT YOUR HEALTH</div>
                    <h2>We Care About You</h2>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
