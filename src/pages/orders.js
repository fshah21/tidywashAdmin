import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DataTable from "examples/Tables/DataTable";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidenav from "examples/Sidenav";
import Icon from "@mui/material/Icon";
import Employees from "pages/employees";
import Memberships from 'pages/memberships';
import DashboardPage from 'pages/dashboard';

function Orders() {
  const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboards",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    noCollapse: true,
    component: <DashboardPage />
  },
  {
    type: "collapse",
    name: "Orders",
    key: "pages",
    icon: <Icon fontSize="small">image</Icon>,
    route: "/orders",
    noCollapse: true,
    component: <Orders />
  },
  {
    type: "collapse",
    name: "Memberships",
    key: "pages",
    icon: <Icon fontSize="small">image</Icon>,
    route: "/memberships",
    noCollapse: true,
    component: <Memberships />
  },
  {
    type: "collapse",
    name: "Employees",
    key: "account",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/employees",
    noCollapse: true,
    component: <Employees />
  },
  {
    type: "collapse",
    name: "Logout",
    key: "team",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/logout",
    noCollapse: true,
  }
];
    console.log("IN ORDERS COMPONENT");
    const [names, setNames] = useState([]);
    const [rows, setRows] = useState([]);

    const columns = [
      { Header: "ID", accessor: "id", align: "left" },
      { Header: "Customer Info", accessor: "customer", align: "left" },
      {
        Header: "Pickup Info",
        accessor: "pickup",
        align: "left",
        Cell: ({ value }) => {
          const employee = names.find(emp => emp.id === value.employeeId);
          return (
            <div style={{ whiteSpace: "pre-line" }}>
              Pickup Slot: {value.slot}
              {"\n"}Pickup Date: {value.date}
              {"\n"}Pickup Employee: {employee ? employee.name : "Not Assigned"}
            </div>
          );
        },
      },
      {
        Header: "Delivery Info",
        accessor: "delivery",
        align: "left",
        Cell: ({ value }) => {
          const employee = names.find(emp => emp.id === value.employeeId);
          return (
            <div style={{ whiteSpace: "pre-line" }}>
              Delivery Slot: {value.slot}
              {"\n"}Delivery Date: {value.date}
              {"\n"}Delivery Employee: {employee ? employee.name : "Not Assigned"}
            </div>
          );
        },
      },     
      { Header: "Status", accessor: "status", align: "left" },
    ];    

      useEffect(() => {
        const fetchAllOrders = async () => {
          try {
            const response = await axios.get("https://asia-south1-tidywash-front.cloudfunctions.net/orderservice/api/orders/getAllOrders");
            const data = response.data;

            const formattedRows = data.map((order, index) => {
              return {
                id: index + 1,
                order_id: order.id,
                customer: `Phone Number: ${order.customer?.user.phone_number.number}`,
                pickup: {
                  slot: order.pickup_slot,
                  date: order.pickup_date,
                  employeeId: order.pickup_employee_id || "", // store ID
                },
                delivery: {
                  slot: order.delivery_slot,
                  date: order.delivery_date,
                  employeeId: order.delivery_employee_id || "",
                },
                status: order.status,
              };
            });
  
          setRows(formattedRows);
          } catch (error) {
            console.error("Error fetching orders:", error);
          }
        };

        const fetchAllEmployees = async () => {
          try {
            const response = await axios.get("https://asia-south1-tidywash-front.cloudfunctions.net/userservice/api/getAllEmployees"); // Adjust URL if needed
            const data = response.data;
    
            const employees = data.map(emp => ({
              id: emp.id,
              name: emp.user.first_name + " " + emp.user.last_name
            }));
        
            console.log("EMPLOYEES", employees);
            setNames(employees); // now names is actually a list of objects with id + name
          } catch (error) {
            console.error("Error fetching employees:", error);
          }
        };
    
        fetchAllOrders();
        fetchAllEmployees();
      }, []);

  //   return (
  //     <DashboardLayout>
  //     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
  //         <h1 style={{ margin: 0 }}>Orders</h1>
  //     </div>
  //     <DataTable
  //         table={{ columns, rows }}
  //         entriesPerPage={{ defaultValue: 10, entries: [5, 10, 20] }}
  //         canSearch
  //         showTotalEntries
  //         pagination={{ variant: "gradient", color: "info" }}
  //         isSorted
  //         noEndBorder
  //     />
  // </DashboardLayout>
  //   );

    return (
  <div
    style={{
      display: "flex",
      flexDirection: "row", // 🔹 side-by-side layout
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
    }}
  >
    {/* 🔹 Sidenav - fixed width */}
    <Sidenav
      color="info"
      brandName="Tidywash"
      routes={routes}
    />

    {/* 🔹 Main Content Area */}
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* <DashboardNavbar /> */}

      {/* Content Area */}
      <div
        style={{
          width: "100%",
          padding: "20px",
          overflowY: "auto",
          flex: 1,
        }}
      >
        <h3>Orders</h3>
        <DataTable
          table={{ columns, rows }}
          entriesPerPage={{ defaultValue: 10, entries: [5, 10, 20] }}
          canSearch
          showTotalEntries
          pagination={{ variant: "gradient", color: "info" }}
          isSorted
          noEndBorder
        />
      </div>
    </div>
  </div>
);
        
}  

export default Orders;