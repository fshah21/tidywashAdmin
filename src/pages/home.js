import { useState, useEffect } from "react";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useNavigate } from "react-router-dom";
import bgImage from "assets/images/bg-sign-in-cover.jpeg";
import brandLogo from "assets/images/bg-profile.jpeg";
import Icon from "@mui/material/Icon";
import Orders from "../pages/orders";
import Employees from "../pages/employees";
import Memberships from "../pages/memberships";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("authenticated", true);
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <BasicLayout image={bgImage}>
        <h1>Home Page</h1>
      <Card>
        <MDBox display="flex" justifyContent="center" mt={2}>
          <img 
            src={brandLogo} 
            alt="Sign-in Illustration" 
            style={{ width: "100px", height: "50px", borderRadius: "8px" }} 
          />
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text"
                label="Username"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </MDBox>
            {errorMessage && (
              <MDBox mb={2}>
                <MDTypography color="error">{errorMessage}</MDTypography>
              </MDBox>
            )}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleLogin}>
                Sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Home;
