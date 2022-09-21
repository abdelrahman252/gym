import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack
      alignItems="center"
      sx={{
        width: { lg: "", xs: "150px" },
        flexDirection: { lg: "row", xs: "colum" },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mr: "5px",
        }}
      >
        BodyPart:
      </Typography>
      <Button
        sx={{
          ml: "8px",
          color: "#fff",
          background: "#FFA9A9",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Typography
        variant="h6"
        sx={{
          ml: "10px",
        }}
      >
        Target:
      </Typography>
      <Button
        sx={{
          ml: "8px",
          color: "#fff",
          background: "#FCC757",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: "24px", xs: "20px" } }}
      textTransform="capitalize"
      mt="2px"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
