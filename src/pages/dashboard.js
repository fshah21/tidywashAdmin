import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React from "react";

function Dashboard() {
    console.log("IN DASHBOARD COMPONENT");
    return (
        <DashboardLayout>
        <div>
            <h1>Dashboard</h1>
        </div>
        </DashboardLayout>
    );
        
}  

export default Dashboard;