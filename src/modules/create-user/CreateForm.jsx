import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import CustomCard from "../components/CustomCard";
import Input from "../components/Input";

function CreateForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleValue = (field, value) => {
    const copyState = { ...formValues };
    copyState[field] = value;
    setFormValues(copyState);
  };

  const handleSubmit = () => {
    console.log(formValues);
  };

  return (
    <CustomCard>
      <Box
        sx={{
          padding: "35px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Typography variant="h4" color="secondary">
          Crear Usuario
        </Typography>
        <Input
          variant="outlined"
          size="medium"
          label="nombre"
          color="secondary"
          focused
          fullWidth
          onChange={(e) => handleValue("name", e.target.value)}
        />
        <Input
          variant="outlined"
          size="medium"
          label="email"
          color="secondary"
          focused
          fullWidth
          onChange={(e) => handleValue("email", e.target.value)}
        />
        <Input
          type="password"
          variant="outlined"
          size="medium"
          label="password"
          color="secondary"
          focused
          fullWidth
          onChange={(e) => handleValue("password", e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleSubmit}
        >
          Crear
        </Button>
      </Box>
    </CustomCard>
  );
}

export default CreateForm;
