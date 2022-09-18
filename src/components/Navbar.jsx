import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import "./bmr.css";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0px 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
          className={activeLink === "home" ? "bot" : ""}
          onClick={() => onUpdateActiveLink("home")}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
          className={activeLink === "exercises" ? "bot" : ""}
          onClick={() => onUpdateActiveLink("exercises")}
        >
          Exercises
        </a>

        <Link
          to="/calc"
          className={activeLink === "bmr" ? "bot" : ""}
          onClick={() => onUpdateActiveLink("bmr")}
        >
          BMR Calc
        </Link>
        <Link
          to="/BMI"
          className={activeLink === "Bmi" ? "bot" : ""}
          onClick={() => onUpdateActiveLink("Bmi")}
        >
          BMI Calc
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
