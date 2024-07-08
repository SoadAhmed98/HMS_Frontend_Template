// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Price = () => {
//     const [plans, setPlans] = useState([]);

//     useEffect(() => {
//         axios.get('https://b43c1a73-82c8-4103-8569-c1e7e6a160cd.mock.pstmn.io/groupservices')
//             .then(response => {
//                 setPlans(response.data);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the plans!", error);
//             });
//     }, []);

//     return (
//         <>
//             <section className="price-section">
//                 <div className="auto-container">
//                     <div className="sec-title centered">
//                         <h2>MediTech Health Plan</h2>
//                         <div className="separator"></div>
//                     </div>
//                     <div className="row clearfix">
//                         {plans.map((plan, index) => (
//                             <div key={plan.id} className={`price-block col-lg-4 col-md-6 col-sm-12 wow ${index === 0 ? 'fadeInLeft' : index === 1 ? 'fadeInUp' : 'fadeInRight'}`} data-wow-delay="0ms" data-wow-duration="1500ms">
//                                 <div className="inner-box">
//                                     <div className="upper-box">
//                                         <div className={`icon ${plan.id === 1 ? 'flaticon-doctor-stethoscope' : plan.id === 2 ? 'flaticon-pharmacy' : 'flaticon-operating-room'}`}></div>
//                                         <div className="title">{plan.name}</div>
//                                         <div className="price"><sub>$</sub>{parseFloat(plan.Total_after_discount).toFixed(2)}</div>
//                                         <span className="price-before"><strong>${parseFloat(plan.Total_before_discount).toFixed(2)}</strong></span>

//                                     </div>
//                                     <div className="plan-outer clearfix">
//                                         <div className="plan">{plan.name}</div>
//                                     </div>
//                                     <div className="middle-content">
//                                         <ul >
//                                             {plan.service_group.map(service => (
//                                                 <li key={service.id}>
//                                                     <strong>{service.name} &nbsp; &nbsp; ${parseFloat(service.price).toFixed(2)}</strong><br />
//                                                      {service.description}<br />
//                                                     <strong> Quantity: </strong>{service.pivot.quantity}<br />
                                                     
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                     <a href="#" className="appointment">get appointment</a>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Price;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';

const Price = () => {
    const [plans, setPlans] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost/api/groupservices')
            .then(response => {
                console.log(response)
                setPlans(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the plans!", error);
            });
    }, []);

    const handleGetAppointment = (e) => {
        e.preventDefault();
        const isLoggedIn = localStorage.getItem('login');
        if (isLoggedIn === "false" || !isLoggedIn) {
            history.push('/login'); 
        } else {
            console.log('Proceeding with appointment booking...');
        }
    };

    return (
        <>
            <section className="price-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <h2>MediTech Health Plan</h2>
                        <div className="separator"></div>
                    </div>
                    <div className="row clearfix">
                        {plans.map((plan, index) => (
                            <div key={plan.id} className={`price-block col-lg-4 col-md-6 col-sm-12 wow ${index === 0 ? 'fadeInLeft' : index === 1 ? 'fadeInUp' : 'fadeInRight'}`} data-wow-delay="0ms" data-wow-duration="1500ms" style={{height:"100rem"}}>
                                <div className="inner-box" >
                                    <div className="upper-box">
                                        <div className={`icon ${plan.id === 1 ? 'flaticon-doctor-stethoscope' : plan.id === 2 ? 'flaticon-pharmacy' : 'flaticon-operating-room'}`}></div>
                                        <div className="title">{plan.name}</div>
                                        <div className="price"><sub>$</sub>{parseFloat(Number(plan.total_after_discount)).toFixed(2)}</div>
                                        <span className="price-before"><strong>${parseFloat((plan.total_before_discount)).toFixed(2)}</strong></span>
                                    </div>
                                    <div className="plan-outer clearfix">
                                        <div className="plan">{plan.name}</div>
                                    </div>
                                    <div className="middle-content " style={{height:"15rem"}}>
                                        <ul >
                                            {plan.service_group.map(service => (
                                                <li key={service.id}>
                                                    <strong>{service.name} &nbsp; &nbsp; ${parseFloat(service.price).toFixed(2)}</strong><br />
                                                    {service.description}<br />
                                                    <strong> Quantity: </strong>{service.pivot.quantity}<br />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link  className="appointment fw-bold fs-5" to={{
                                            pathname: `package-invoice`,
                                            state: { 
                                              'serviceId': plan.id, 
                                              servicePrice: plan.total_after_discount
                                              , 
                                              serviceName: plan.name 
                                            }
                                        }}>Buy Now</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Price;

