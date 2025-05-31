import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DataTable from "examples/Tables/DataTable";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Employees() {
    console.log("IN EMPLOYEES COMPONENT");
    const navigate = useNavigate();
    const [rows, setRows] = useState([]);

    const columns = [
        { Header: "ID", accessor: "id", align: "left" },
        { Header: "First Name", accessor: "first_name", align: "left" },
        { Header: "Last Name", accessor: "last_name", align: "left" },
        { Header: "Phone Number", accessor: "phone_number", align: "left" },
    ];

      useEffect(() => {
        const fetchEmployees = async () => {
          try {
            const response = await axios.get("https://tidywashbackend.onrender.com/api/getAllEmployees"); // Adjust URL if needed
            const data = response.data;
    
            const formattedRows = data.map((emp, index) => {
                return {
                  id: emp.id || index + 1,
                  first_name: emp.user.first_name,
                  last_name: emp.user.last_name,
                  phone_number: `${emp.user.phone_number.country_code} ${emp.user.phone_number.number}`,
                };
              });
    
            setRows(formattedRows);
          } catch (error) {
            console.error("Error fetching employees:", error);
          }
        };
    
        fetchEmployees();
      }, []);

    return (
        <DashboardLayout>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h1 style={{ margin: 0 }}>Employees</h1>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate("/create-employee")}
                    sx={{
                        color: "white !important", // force white color
                        textTransform: "none",     // optional: keep original case
                    }}
                    >
                    Create Employee
                </Button>
            </div>
            <DataTable
                table={{ columns, rows }}
                entriesPerPage={{ defaultValue: 10, entries: [5, 10, 20] }}
                canSearch
                showTotalEntries
                pagination={{ variant: "gradient", color: "info" }}
                isSorted
                noEndBorder
            />
        </DashboardLayout>
    );
        
}  

export default Employees;