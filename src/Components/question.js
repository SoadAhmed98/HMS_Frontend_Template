import React, { useState } from 'react';

const Question = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [activeAccordion, setActiveAccordion] = useState(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          id: 1,
          question: 'Can I use my doctor or any other doctor I choose?',
          answer: 'No, just your Primary Care Physician (PCP). However, if you regularly see a specialist, register that doctor. If you have a medical event and see several doctors, you don\'t need to register these doctors. Just register the Medical Event.',
        },
        {
          id: 2,
          question: 'How are my medical bills paid?',
          answer: 'Your medical bills are paid through your insurance. Ensure to follow the insurance guidelines for claim processing.',
        },
        {
          id: 3,
          question: 'Do I need to register every doctor I go to?',
          answer: 'No, just your Primary Care Physician (PCP). However, if you regularly see a specialist, register that doctor. If you have a medical event and see several doctors, you don\'t need to register these doctors. Just register the Medical Event.',
        },
        {
          id: 4,
          question: 'What should I do when I go to the doctor\'s office?',
          answer: 'Ensure you have your insurance card and identification. Follow the office\'s check-in procedures and provide any necessary documentation.',
        },
      ],
    },
    {
      category: 'Urgent',
      questions: [
        {
          id: 5,
          question: 'How much will my hospital stay cost?',
          answer: 'The cost of a hospital stay varies based on the services provided and your insurance coverage. Contact your insurance for detailed information.',
        },
        {
          id: 6,
          question: 'Can I choose my class of ward?',
          answer: 'Yes, you can choose your class of ward based on availability and your insurance coverage.',
        },
        {
          id: 7,
          question: 'What is a Patient Centered Medical Home?',
          answer: 'A Patient Centered Medical Home is a care model that provides comprehensive and continuous medical care to patients with the goal of obtaining maximized health outcomes.',
        },
        {
          id: 8,
          question: 'Why do hospitals not allow returned medication?',
          answer: 'For safety reasons, hospitals do not allow the return of medication once it has left the premises to ensure the integrity and efficacy of the medication.',
        },
      ],
    },
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <>
      {/* Faq Page Section */}
      <section className="faq-page-section">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <h2>Frequently Asked Questions <br /> Get Every Single Answer Here.</h2>
            <div className="separator"></div>
          </div>

          {/* Faq Info Tabs */}
          <div className="faq-info-tabs">
            {/* Faq Tabs */}
            <div className="faq-tabs tabs-box">
              {/* Tab Buttons */}
              <ul className="tab-btns tab-buttons clearfix">
                {faqs.map((faq, index) => (
                  <li
                    key={index}
                    className={`tab-btn ${activeTab === faq.category.toLowerCase() ? 'active-btn' : ''}`}
                    onClick={() => setActiveTab(faq.category.toLowerCase())}
                  >
                    {faq.category}
                  </li>
                ))}
              </ul>

              {/* Tabs Content */}
              <div className="tabs-content">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`tab ${activeTab === faq.category.toLowerCase() ? 'active-tab' : ''}`}
                    id={`prod-${faq.category.toLowerCase()}`}
                  >
                    <div className="content">
                      <div className="row clearfix">
                        {faq.questions.map((question, idx) => (
                          <div key={question.id} className="column col-lg-6 col-md-12 col-sm-12">
                            <ul className="accordion-box">
                              <li className={`accordion block ${activeAccordion === question.id ? 'active-block' : ''}`}>
                                <div
                                  className={`acc-btn ${activeAccordion === question.id ? 'active' : ''}`}
                                  onClick={() => toggleAccordion(question.id)}
                                >
                                  <div className="icon-outer">
                                    <span className="icon icon-plus flaticon-add"></span>
                                    <span className="icon icon-minus fas fa-minus"></span>
                                  </div>
                                  {question.question}
                                </div>
                                <div className={`acc-content ${activeAccordion === question.id ? 'current' : ''}`}>
                                  <div className="content">
                                    <div className="text">{question.answer}</div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* End Faq Page Section */}
    </>
  );
}

export default Question;
