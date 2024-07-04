import React, { useEffect, useState } from "react";
import Header from "../Components/header.js";
import  Navbar  from "../Components/navbar.js";
import WOW from 'wowjs';
import axios from "axios";

function PredictDisease () {

  useEffect(() => {
		new WOW.WOW().init();
	}, []);

  const Symptoms = [
    'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine',
    'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach',
    'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation',
    'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs',
    'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool',
    'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs',
    'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails',
    'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips',
    'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints',
    'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness',
    'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of_urine',
    'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)',
    'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain',
    'abnormal_menstruation', 'dischromic_patches', 'watering_from_eyes', 'increased_appetite', 'polyuria',
    'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances',
    'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding',
    'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload', 'blood_in_sputum',
    'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads',
    'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails',
    'blister', 'red_sore_around_nose', 'yellow_crust_ooze'
  ];
        const [symptoms, setSymptoms] = useState([{ id: 1, value: '' }]);

        const addSymptom = () => {
            setSymptoms([
            ...symptoms,
            { id: symptoms.length + 1, value: '' },
            ]);
        };

        const handleSymptomChange = (id, value) => {
            setSymptoms(
            symptoms.map((symptom) =>
                symptom.id === id ? { ...symptom, value } : symptom
            )
            );
        };
    
      const [predictions, setPredictions] = useState(null);
      const [error404, setError404] = useState(null);
    
      const handleSubmit = async (e) => {
        
        e.preventDefault();
        setPredictions(null)
        setError404(null)
        const symptomList = symptoms.filter(symptom => symptom.value !== '');
        try {
          const response = await axios.post('http://127.0.0.1:5000/predict', { symptoms: symptomList });
          // console.log(response)
          // console.log(JSON.stringify({response}))
          setPredictions(response.data);
          // console.log(predictions)
          // const data =  JSON.stringify({response});
          // setPredictions(data);
          // console.log(predictions)


        } catch (Errorrr) {
          
          console.error('There was an error making the request:', Errorrr);
          // console.log(Errorrr.response.data.error)
          setError404(Errorrr.response.data.error)
          // console.log(error404)
        }
      };

    return (
      <>
      <Navbar/>
      <Header head="Predict Disease For MediTech" content="How to predict disease from symptoms?" place="Predict Disease"/>
      
      
      <section className="container mt-5 p-5">
      <div className="sec-title centered">
              <h2>Disease Prediction </h2>
              <div className="separator"></div>
            </div>
       <div className=" row d-flex justify-content-between">
        <div className="p-2 col-md-6 col-sm-8 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">

            <form onSubmit={handleSubmit} >
        <h2 className=" mb-3">Enter your Symptoms: </h2>

        {symptoms.map((symptom) => (
          <div key={symptom.id} className="mb-3 d-flex ">
            <label className="form-label mr-3 pt-1">Symptom{symptom.id}:</label>
            <select
              className="form-select w-100"
              value={symptom.value}
              onChange={(e) => handleSymptomChange(symptom.id, e.target.value)}
            >

            <option value="">-- Select a Symptom --</option>
                      {Symptoms.map((symptom, index) => (
                        <option key={index} value={symptom}>
                          {symptom.replace(/_/g, ' ')}  {/* Replace underscores with spaces for readability */}
                        </option>
                      ))}
              {/* <option value="">Select</option>
              <option value="back_pain">Back Pain</option>
              <option value="constipation">Constipation</option>
              <option value="abdominal_pain">Abdominal Pain</option>
              <option value="mild_fever">Mild Fever</option>
              <option value="muscle_weakness">Muscle Weakness</option> */}
              {/* Add other symptoms as options */}
            </select>
          </div>
        ))}

        <div className="position-relative">
        <button
          type="button"
          className="btn btn-success  text-right position-absolute end-0"
          onClick={addSymptom}>
          +
        </button>
        </div>
        <br/>

        <button type="submit" className="btn btn-primary">
          Predict
        </button>

        <br/>

        <div className="form-group mt-4">
                <textarea
                    className="form-control bg-light"
                    rows="8"
                    readOnly
                    value={
                        predictions
                            ? `Your Disease is ${predictions.NaiveBayes}`
                            // (<p>Your Disease is <span className="fw-bold">{predictions.NaiveBayes}</span></p>)
                            : error404
                                ? `${error404}`
                                // (<p className="text-danger">{error404}</p>)
                                : ''
                    }
                ></textarea>
            </div>
      </form>


           

            {/* {predictions && (
                
                <div>
                
                <h2>Predictions</h2>
                <p>Decision Tree: {predictions.DecisionTree}</p>
                <p>Random Forest: {predictions.RandomForest}</p>
                <p>Naive Bayes: {predictions.NaiveBayes}</p>
                </div>
            ) }

            { error404 && (
            <div>
                
                 <p className="text-danger">{error404}</p>
                
                
            </div>
            )} */}

        </div>

        <div className=" col-md-6 col-sm-8 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
            <img src="/images/docs1.png" alt="Description" />
        </div>
        </div>
      </section>
      </>
    );
  };
  
  export default PredictDisease;