import React, { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import axios from "axios";

function CreateEmployee() {
  const [formData, setFormData] = useState({
    countryCode: "+91",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    try {
        const response = await axios.post("https://tidywashbackend.onrender.com/api/createEmployee", {
            phone_number: {
                number: formData.phoneNumber,
                country_code: formData.countryCode
            },
            first_name: formData.firstName,
            last_name: formData.lastName
        }); // adjust URL if needed
        console.log("Employee created:", response.data);
        alert("Employee created successfully");
    } catch (error) {
    console.error("Error creating employee:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Failed to create employee");
    }
  };

  return (
    <DashboardLayout>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <h1 style={{ margin: 0 }}>Create Employee</h1>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Country Code"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit"
                sx={{
                    color: "white !important", // force white color
                    textTransform: "none",     // optional: keep original case
                }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </DashboardLayout>
  );
}

export default CreateEmployee;
