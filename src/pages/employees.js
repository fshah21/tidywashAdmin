import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DataTable from "examples/Tables/DataTable";
import React from "react";

function Employees() {
    console.log("IN EMPLOYEES COMPONENT");

    const employeeTableData = {
        columns: [
          { Header: "ID", accessor: "id", align: "left" },
          { Header: "Name", accessor: "name", align: "left" },
          { Header: "Email", accessor: "email", align: "left" },
          { Header: "Role", accessor: "role", align: "left" },
        ],
        rows: [
          { id: 1, name: "Alice Smith", email: "alice@example.com", role: "Manager" },
          { id: 2, name: "Bob Johnson", email: "bob@example.com", role: "Delivery" },
          { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Cleaner" },
          // Add more employee records as needed
        ],
      };

    return (
        <DashboardLayout>
            <h1>Employees</h1>
            <DataTable
                table={employeeTableData}
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