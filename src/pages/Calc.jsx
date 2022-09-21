import { Tab, Nav } from "react-bootstrap";
import "./calc.css";

import React, { useState } from "react";

import {

  Box,
  Typography,
} from "@mui/material";
import MetricUnits from "../components/MetricUnits";
import UsUnits from "../components/UsUnits";

const Calc = () => {

  const [unit, setUnit] = useState("Calories");
  const [bmr, setBmr] = useState("");
  const [activity, setActivity] = useState("normal");

  
  return (
    <div>
      <Box my={7}>
        <Typography
          variant="h3"
          mb={3}
          sx={{ fontWeight: "bold", color: "#be3b3b" }}
        >
          BMR Calculator
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, fontStyle: "italic" }}>
          The Basal Metabolic Rate (BMR) Calculator estimates your basal
          metabolic rate—the amount of energy expended while at rest in a
          neutrally temperate environment, and in a post-absorptive state
          (meaning that the digestive system is inactive, which requires about
          12 hours of fasting)
        </Typography>
      </Box>
      <Tab.Container id="projects-tabs" defaultActiveKey="first">
        <Nav
          size={12}
          variant="pills"
          className="nav-pills mb-5 justify-content-center align-items-center "
          id="pills-tab"
        >
          <Nav.Item sm={6} md={6}>
            <Nav.Link eventKey="first"> Metric Units</Nav.Link>
          </Nav.Item>
          <Nav.Item sm={6} md={6}>
            <Nav.Link eventKey="second">US Units</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content id="slideInUp">
          <Tab.Pane eventKey="first">
            <MetricUnits
              unit={unit}
              setUnit={setUnit}
              bmr={bmr}
              setBmr={setBmr}
              activity={activity}
              setActivity={setActivity}
            />
          </Tab.Pane>
        </Tab.Content>
        <Tab.Content id="slideInUp">
          <Tab.Pane eventKey="second">
            <UsUnits
              unit={unit}
              setUnit={setUnit}
              bmr={bmr}
              setBmr={setBmr}
              activity={activity}
              setActivity={setActivity}
            />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      <Box mt={5}>
        <Typography variant="body1" sx={{ maxWidth: 600, fontStyle: "italic" }}>
          <span style={{ fontSize: 24, fontStyle: "normal" }}>Exercise</span> :
          15-30 minutes of elevated heart rate activity.
          <br />{" "}
          <span style={{ fontSize: 24, fontStyle: "normal" }}>
            Intense exercise
          </span>
          : 45-120 minutes of elevated heart rate activity. <br />
          <span style={{ fontSize: 24, fontStyle: "normal" }}>
            Very intense exercise
          </span>{" "}
          : 2+ hours of elevated heart rate activity.
        </Typography>
      </Box>
    </div>
  );
};

export default Calc;
