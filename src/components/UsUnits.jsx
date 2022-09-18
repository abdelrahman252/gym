import React, { useState } from "react";
import { Grow } from "@mui/material";
import "./bmr.css";
const UsUnits = ({ unit, setUnit, bmr, setBmr, activity, setActivity }) => {
  const act = {
    normal: 1,
    Sedentary: 1.2,
    Light: 1.375,
    Moderate: 1.465,
    Active: 1.55,
    Very: 1.725,
    Extra: 1.9,
  };
  const [age, setAge] = useState(25);
  const [weight, setWeight] = useState(160);
  const [heightInFeet, setHeightInFeet] = useState(5);
  const [heightInInches, setHeightInInches] = useState(10);
  const [bodyFat, setBodyFat] = useState(20);
  const [gender, setGender] = useState("male");
  const [formula, setFormula] = useState("0");

  var flag = false;

  const handCalc = (e) => {
    e.preventDefault();
    let bmrCalc = "";
    let height = heightInFeet * 30.48 + heightInInches * 2.54;
    let w = weight / 2.2;
    if (gender === "male") {
      bmrCalc = 10 * w + 6.25 * height - 5 * age + 5;
      if (formula === "1") {
        bmrCalc = 13.397 * w + 4.799 * height - 5.677 * age + 88.362;
      } else if (formula === "2") {
        bmrCalc = 370 + 21.6 * (1 - bodyFat / 100) * w;
      }
      bmrCalc = parseInt(bmrCalc) * act[activity];
    } else if (gender === "Female") {
      bmrCalc = 10 * w + 6.25 * height - 5 * age - 161;
      if (formula === "1") {
        bmrCalc = 9.247 * w + 3.098 * height - 4.33 * age + 447.593;
      } else if (formula === "2") {
        bmrCalc = 370 + 21.6 * (1 - bodyFat / 100) * w;
      }
      bmrCalc = parseInt(bmrCalc) * act[activity];
    }

    if (unit == "kilojoules") {
      bmrCalc = parseFloat(bmrCalc) * 4.1868;
    }

    setBmr(bmrCalc);
  };
  if (unit == "kilojoules") {
    flag = true;
  }
  let resultBMR;
  if (bmr) {
    resultBMR = (
      <Grow in>
        <div className="container">
          <h4 className="text-center form-control my-3 text-danger fs-4">
            You should consume{" "}
            <span className="text-black fs-3">{Math.ceil(bmr)}</span>{" "}
            <span className="text-secondary">{unit}</span>
            /day of calorie to maintain your weight.
          </h4>
        </div>
      </Grow>
    );
  }
  let rest = () => {
    setAge("");
    setWeight("");
    setHeightInFeet("");
    setHeightInInches("");
    setBmr("");
    setFormula("0");
    setUnit("Calories");
    setBodyFat("");
    setActivity("normal");
  };
  return (
    <div>
      <form className="CalculateForm" method="post">
        <div className="card  text-black">
          <div className="card-body">
            <div className="row g-5">
              <div className="col-sm-4">
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
              <div className="col-sm-4">
                <div>
                  <h5>Gender*</h5>
                  <div className="form-control">
                    <div className="row">
                      <div className="col-6 d-flex align-items-center">
                        <input
                          id="ma"
                          type="radio"
                          value="male"
                          checked={gender === "male"}
                          onChange={(e) => setGender(e.target.value)}
                          className="form-check-input"
                        />
                        <label className="ms-2" htmlFor="ma">
                          Male
                        </label>
                      </div>
                      <div className="col-6 d-flex align-items-center">
                        <input
                          required
                          type="radio"
                          id="fe"
                          value="Female"
                          checked={gender === "Female"}
                          onChange={(e) => setGender(e.target.value)}
                          className="form-check-input"
                        />
                        <label className="ms-2" htmlFor="fe">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div>
                  <h5>Body Fat*</h5>
                  <div className="d-flex align-items-center">
                    <input
                      className="form-control text-start"
                      name="bodyFat"
                      type="number"
                      value={bodyFat}
                      onChange={(e) => setBodyFat(e.target.value)}
                    />
                    <span className="btn ms-1 bg-danger text-white">%</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    <h5>height In Feet*</h5>
                    <div className="d-flex align-items-center">
                      <input
                        className="form-control text-start"
                        name="height"
                        type="number"
                        value={heightInFeet}
                        onChange={(e) => setHeightInFeet(e.target.value)}
                      />
                      <span className="btn ms-1 bg-danger text-white text-nowrap">
                        feet
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <h5>height In Inches*</h5>
                    <div className="d-flex align-items-center">
                      <input
                        className="form-control text-start"
                        name="height"
                        type="number"
                        value={heightInInches}
                        onChange={(e) => setHeightInInches(e.target.value)}
                      />
                      <span className="btn ms-1 bg-danger text-white text-nowrap">
                        inches
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div>
                  <h5>Weight In Pounds*</h5>
                  <div className="d-flex align-items-center">
                    <input
                      className="form-control text-start"
                      name="weight"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                    <span className="btn ms-1 bg-danger text-nowrap text-white">
                      Pounds
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h5>Activity*</h5>
                <select
                  className="form-select"
                  name="activity"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                >
                  <option value="normal">Basal Metabolic Rate (BMR)</option>
                  <option value="Sedentary">
                    Sedentary: little or no exercise
                  </option>
                  <option value="Light">Light: exercise 1-3 times/week</option>
                  <option value="Moderate">
                    Moderate: exercise 4-5 times/week
                  </option>
                  <option value="Active">
                    Active: daily exercise or intense exercise 3-4 times/week
                  </option>
                  <option value="Very">
                    Very Active: intense exercise 6-7 times/week
                  </option>
                  <option value="Extra">
                    Extra Active: very intense exercise daily, or physical job
                  </option>
                </select>
              </div>
              <div className="col-sm-6">
                <div>
                  <h5>Result Unit*</h5>
                  <div className="form-control">
                    <div className="row">
                      <div className="col-6 d-flex align-items-center">
                        <input
                          type="radio"
                          value="Calories"
                          id="Calo"
                          checked={unit === "Calories"}
                          onChange={(e) => setUnit(e.target.value)}
                          className="form-check-input"
                        />
                        <label className="ms-2" htmlFor="Calo">
                          Calories
                        </label>
                      </div>
                      <div className="col-6 d-flex align-items-center">
                        <input
                          type="radio"
                          value="kilojoules"
                          id="kilo"
                          checked={unit === "kilojoules"}
                          onChange={(e) => setUnit(e.target.value)}
                          className="form-check-input"
                        />
                        <label className="ms-2" htmlFor="kilo">
                          kilojoules
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div>
                  <h5>BMR estimation formula*</h5>
                  <div className="row g-3">
                    <div className="col-sm-12 d-flex align-items-center">
                      <input
                        id="Mifn"
                        type="radio"
                        value="0"
                        checked={formula === "0"}
                        onChange={(e) => setFormula(e.target.value)}
                        className="form-check-input"
                      />
                      <label className="ms-2" htmlFor="Mifn">
                        Mifflin St Jeor
                      </label>
                    </div>
                    <div className="col-sm-12 d-flex align-items-center">
                      <input
                        id="Harr"
                        type="radio"
                        value="1"
                        checked={formula === "1"}
                        onChange={(e) => setFormula(e.target.value)}
                        className="form-check-input"
                      />
                      <label className="ms-2" htmlFor="Harr">
                        Revised Harris-Benedict
                      </label>
                    </div>
                    <div className="col-sm-12 d-flex align-items-center">
                      <input
                        id="kah"
                        type="radio"
                        value="2"
                        checked={formula === "2"}
                        onChange={(e) => setFormula(e.target.value)}
                        className="form-check-input"
                      />
                      <label
                        className="ms-2 custom-control-label green"
                        htmlFor="kah"
                      >
                        Katch-McArdle
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {resultBMR}
          <div className="text-center mt-4 card-footer">
            <button
              className="btn btn-success mx-4"
              onClick={handCalc}
              type="button"
            >
              Calculate
            </button>
            <button className="btn btn-secondary" onClick={rest} type="reset">
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UsUnits;
