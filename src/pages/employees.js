import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React from "react";

function Employees() {
    console.log("IN EMPLOYEES COMPONENT");
    return (
        <DashboardLayout>
        <div>
            <h1>Employees</h1>
        </div>
        </DashboardLayout>
    );
        
}  

export default Employees;