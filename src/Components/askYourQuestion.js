import React from 'react';

const AskYourQuestion = () => {
  return (
    <>
      {/* Faq Form Section */}
      <section className="faq-form-section mb-5">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>Ask Your Question</h2>
            <div className="separator"></div>
          </div>

          {/* Faq Form */}
          <div className="faq-form">
            {/* Faq Form */}
            <form method="post" action="blog.html">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input type="text" name="username" placeholder="Name" required />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input type="email" name="email" placeholder="Email" required />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input type="text" name="phone" placeholder="Phone" required />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input type="text" name="department" placeholder="Department" required />
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea name="message" placeholder="Your Question"></textarea>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                  <button className="theme-btn btn-style-two" type="submit" name="submit-form">
                    <span className="txt">Ask A Question</span>
                  </button>
                </div>
              </div>
            </form>
            {/* End Faq Form */}
          </div>
        </div>
      </section>
      {/* End Faq Form Section */}
    </>
  );
}

export default AskYourQuestion;
