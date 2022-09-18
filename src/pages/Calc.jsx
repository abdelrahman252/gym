import { Tab, Nav } from "react-bootstrap";
import "./calc.css";

import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import MetricUnits from "../components/MetricUnits";
import UsUnits from "../components/UsUnits";

const Calc = () => {
  const act = {
    normal: 1,
    Sedentary: 1.2,
    Light: 1.375,
    Moderate: 1.465,
    Active: 1.55,
    Very: 1.725,
    Extra: 1.9,
  };
  const [unit, setUnit] = useState("Calories");
  const [bmr, setBmr] = useState("");
  const [activity, setActivity] = useState("normal");

  const rows = [
    {
      Sedentary: "Sedentary: little or no exercise",
      Light: "Exercise 1-3 times/week",
      Moderate: "Exercise 4-5 times/week",
      Active: "Daily exercise or intense exercise 3-4 times/week",
      Very: "Intense exercise 6-7 times/week",
      Extra: "Very intense exercise daily, or physical job",
    },
  ];
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

      <div
        style={{
          display: "flex",
          alignItems: "start",
          gap: "3em",
        }}
      >
        <TableContainer component={Paper} sx={{ marginTop: 10, maxWidth: 650 }}>
          <Table sx={{ maxWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 24, fontWeight: "bold" }}>
                  Activity Level
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 24, fontWeight: "bold", color: "#be3b3b" }}
                >
                  {unit}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <>
                  <TableRow key={row.id}>
                    <TableCell>{row.Sedentary}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#be3b3b",
                      }}
                    >
                      {Math.ceil(bmr * 1.2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{row.Light}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#be3b3b",
                      }}
                    >
                      {Math.ceil(bmr * 1.375)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{row.Moderate}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#be3b3b",
                      }}
                    >
                      {Math.ceil(bmr * 1.465)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{row.Active}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#be3b3b",
                      }}
                    >
                      {Math.ceil(bmr * 1.55)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{row.Very}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#be3b3b",
                      }}
                    >
                      {Math.ceil(bmr * 1.725)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{row.Extra}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#be3b3b",
                      }}
                    >
                      {Math.ceil(bmr * 1.9)}
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={10}>
          <Typography
            variant="body1"
            sx={{ maxWidth: 600, fontStyle: "italic" }}
          >
            <span style={{ fontSize: 24, fontStyle: "normal" }}>Exercise</span>{" "}
            : 15-30 minutes of elevated heart rate activity.
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
    </div>
  );
};

export default Calc;
