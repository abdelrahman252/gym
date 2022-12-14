import React, { useState } from "react";
import { Box, Grow } from "@mui/material";
import under from "../assets/images/underweight.png";
import healthy from "../assets/images/healthy.png";
import over from "../assets/images/overweight.png";
import "./bmr.css";

const MetricUnitsForBMI = () => {
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(180);
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState("");

  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault();
    let h = height / 100;
    if (weight === 0 || h === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / (h * h);
      setBmi(bmi.toFixed(1));

      // Logic for message

      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  //  show image based on bmi calculation
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 25) {
      imgSrc = under;
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = healthy;
    } else {
      imgSrc = over;
    }
  }

  let reload = () => {
    setAge("");
    setWeight("");
    setHeight("");
    setBmi("");
  };
  let resultBMR;
  if (bmi) {
    resultBMR = (
      <Grow in>
        <div className="container">
          <div className="text-center middle my-3  fs-4">
            <h3>
              Your BMI is: <span className="text-danger">{bmi}</span> kg/m2
            </h3>
            <p>{message}</p>
          </div>
          <div className="text-center">
            <img src={imgSrc} alt=""></img>
          </div>
        </div>
      </Grow>
    );
  }
  return (
    <div className="card  text-black  CalculateForm">
      <div className="card-body">
        <div className="row g-5 ">
          <div className="col-sm-6">
            <div>
              <h5>Age*</h5>
              <input
                className="form-control text-start"
                name="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div>
              <h5>Gender*</h5>
              <div className="form-control">
                <div className="row">
                  <div className="col-6 d-flex align-items-center">
                    <input
                      id="m"
                      type="radio"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                      className="form-check-input"
                    />
                    <label className="ms-2" htmlFor="m">
                      Male
                    </label>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <input
                      required
                      type="radio"
                      id="fm"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={(e) => setGender(e.target.value)}
                      className="form-check-input"
                    />
                    <label className="ms-2" htmlFor="fm">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div>
              <h5>Height*</h5>
              <div className="d-flex align-items-center">
                <input
                  className="form-control text-start"
                  name="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
                <span className="btn ms-1 bg-danger text-white text-nowrap">
                  cm
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div>
              <h5>Weight*</h5>
              <div className="d-flex align-items-center">
                <input
                  className="form-control text-start"
                  name="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                <span className="btn ms-1 bg-danger text-nowrap text-white">
                  kg
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center mt-4 card-footer">
              <button
                className="btn btn-success mx-4"
                type="submit"
                onClick={calcBmi}
              >
                Calculate
              </button>
              <button
                className="btn btn-secondary"
                onClick={reload}
                type="submit"
              >
                Clear
              </button>
            </div>

            {resultBMR}
          </div>
        </div>
      </div>
      <Box>
        <ul style={{ fontWeight: "600" }}>
          <li>Healthy BMI range: 18.5 kg/m2 - 25 kg/m2</li>
          <li>Healthy weight for the height: 128.9 lbs - 174.2 lbs</li>
          <li> Ponderal Index: 12.9 kg/m3</li>
        </ul>
      </Box>
    </div>
  );
};

export default MetricUnitsForBMI;
