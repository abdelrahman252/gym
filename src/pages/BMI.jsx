import React from "react";
import { Tab, Nav } from "react-bootstrap";
import "./calc.css";

import bmiChart from "../assets/images/bmi-chart.gif";
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
  Grow,
} from "@mui/material";
import MetricUnitsForBMI from "../components/MetricUnitsForBMI";
import UsUnitsForBMI from "../components/UsUnitsForBMI";
const BMI = () => {
  
  return (
    <>
      <Box my={7}>
        <Typography
          variant="h3"
          mb={3}
          sx={{ fontWeight: "bold", color: "#be3b3b" }}
        >
          BMI Calculator
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, fontStyle: "italic" }}>
          The Body Mass Index (BMI) Calculator can be used to calculate BMI
          value and corresponding weight status while taking age into
          consideration. Use the "Metric Units" tab for the International System
          of Units or the "Other Units" tab to convert units into either US or
          metric units. Note that the calculator also computes the Ponderal
          Index in addition to BMI, both of which are discussed below in detail.
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
            <MetricUnitsForBMI />
          </Tab.Pane>
        </Tab.Content>
        <Tab.Content id="slideInUp">
          <Tab.Pane eventKey="second">
            <UsUnitsForBMI />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      <Box>
        <Typography
          variant="h5"
          my={3}
          sx={{ fontWeight: "bold", color: "#be3b3b" }}
        >
          BMI introduction
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, fontStyle: "italic" }}>
          BMI is a measurement of a person's leanness or corpulence based on
          their height and weight, and is intended to quantify tissue mass. It
          is widely used as a general indicator of whether a person has a
          healthy body weight for their height. Specifically, the value obtained
          from the calculation of BMI is used to categorize whether a person is
          underweight, normal weight, overweight, or obese depending on what
          range the value falls between. These ranges of BMI vary based on
          factors such as region and age, and are sometimes further divided into
          subcategories such as severely underweight or very severely obese.
          Being overweight or underweight can have significant health effects,
          so while BMI is an imperfect measure of healthy body weight, it is a
          useful indicator of whether any additional testing or action is
          required. Refer to the table below to see the different categories
          based on BMI that are used by the calculator.
        </Typography>
        <Typography
          variant="h5"
          my={3}
          sx={{ fontWeight: "bold", color: "#be3b3b" }}
        >
          BMI table for adults
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, fontStyle: "italic" }}>
          This is the World Health Organization's (WHO) recommended body weight
          based on BMI values for adults. It is used for both men and women, age
          20 or older.
        </Typography>
        <TableContainer
          component={Paper}
          sx={{ marginTop: 2, marginLeft: 10, maxWidth: 340 }}
        >
          <Table sx={{ maxWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 18, fontWeight: "bold" }}>
                  Category
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 18, fontWeight: "bold", color: "#be3b3b" }}
                >
                  BMI range - kg/m2
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <>
                <TableRow>
                  <TableCell>Severe Thinness</TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#be3b3b",
                    }}
                  >
                    {" "}
                    16
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Moderate Thinness </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#be3b3b",
                    }}
                  >
                    16 - 17
                  </TableCell>
                </TableRow>{" "}
                <TableRow>
                  <TableCell>Mild Thinness </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#be3b3b",
                    }}
                  >
                    17 - 18.5
                  </TableCell>
                </TableRow>{" "}
                <TableRow>
                  <TableCell>Normal</TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#be3b3b",
                    }}
                  >
                    18.5 - 25
                  </TableCell>
                </TableRow>{" "}
                <TableRow>
                  <TableCell>Overweight</TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#be3b3b",
                    }}
                  >
                    25 - 30
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Obese Class I </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#be3b3b",
                    }}
                  >
                    30 - 35
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Obese Class II</TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#be3b3b",
                    }}
                  >
                    35 - 40
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Obese Class III </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#be3b3b",
                    }}
                  >
                    40
                  </TableCell>
                </TableRow>
              </>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography
          variant="h5"
          my={3}
          sx={{ fontWeight: "bold", color: "#be3b3b" }}
        >
          BMI chart for adults
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, fontStyle: "italic" }}>
          This is a graph of BMI categories based on the World Health
          Organization data. The dashed lines represent subdivisions within a
          major categorization.
        </Typography>
        <img src={bmiChart} alt="" />
      </Box>
    </>
  );
};

export default BMI;
