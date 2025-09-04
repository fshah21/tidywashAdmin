import DashboardLayout from "../examples/LayoutContainers/DashboardLayout";
import DefaultLineChart from "../examples/Charts/LineCharts/DefaultLineChart";
// import React, { useEffect, useState } from "react";
// import Sidenav from "../examples/Sidenav";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import { useNavigate } from "react-router-dom";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// // @mui icons
// import Icon from "@mui/material/Icon";
// import Orders from "pages/orders";
// import Employees from "pages/employees";
// import Memberships from 'pages/memberships';



// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// // function Dashboard() {
// //   console.log("IN DASHBOARD COMPONENT");
// //   return (
// //     <DashboardLayout>
// //       <h3>Dashboard</h3>
// //       <div style={{ display: "flex", gap: "20px", marginTop: "5%" }}>
// //         <div style={{ flex: 1 }}>
// //           <DefaultLineChart
// //             icon={{ color: "info", component: "show_chart" }}
// //             title="Orders This Week"
// //             description="Daily order trends"
// //             height="20rem"
// //             chart={chartData}
// //           />
// //         </div>

// //         <div style={{ flex: 1 }}>
// //           <DefaultLineChart
// //             icon={{ color: "info", component: "show_chart" }}
// //             title="Memberships This Week"
// //             description="Daily membership trends"
// //             height="20rem"
// //             chart={chartData}
// //           />
// //         </div>
// //       </div>
      
// //     </DashboardLayout>
// //   );
// // }

// // export default Dashboard;


// // import brandLogo from "assets/images/pplogo.png";

// function Dashboard() {
//   console.log("IN DASHBOARD PAGE");
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isCheckingAuth, setIsCheckingAuth] = useState(true); // New state to prevent rendering

//   useEffect(() => {
//     const authenticated = localStorage.getItem("authenticated");
//     if (!authenticated) {
//       navigate("/");
//     } else {
//       setIsAuthenticated(true);
//     }
//     setIsCheckingAuth(false);
//   }, [navigate]);

//   if (isCheckingAuth) {
//     return null; // Nothing is rendered until the check is complete
//   }

//   if (!isAuthenticated) {
//     return null; // Prevent rendering anything if not authenticated
//   }

//   const routes = [
//     {
//       type: "collapse",
//       name: "Dashboard",
//       key: "dashboards",
//       icon: <Icon fontSize="small">dashboard</Icon>,
//       route: "/dashboard",
//       noCollapse: true,
//       component: <Dashboard />
//     },
//     {
//       type: "collapse",
//       name: "Orders",
//       key: "pages",
//       icon: <Icon fontSize="small">image</Icon>,
//       route: "/orders",
//       noCollapse: true,
//       component: <Orders />
//     },
//     {
//       type: "collapse",
//       name: "Memberships",
//       key: "pages",
//       icon: <Icon fontSize="small">image</Icon>,
//       route: "/memberships",
//       noCollapse: true,
//       component: <Memberships />
//     },
//     {
//       type: "collapse",
//       name: "Employees",
//       key: "account",
//       icon: <Icon fontSize="small">person</Icon>,
//       route: "/employees",
//       noCollapse: true,
//       component: <Employees />
//     },
//     {
//       type: "collapse",
//       name: "Logout",
//       key: "team",
//       icon: <Icon fontSize="small">people</Icon>,
//       route: "/logout",
//       noCollapse: true,
//     }
//   ];

//   return (
//     // <div style={{ 
//     //   display: "flex", 
//     //   flexDirection: "column", 
//     //   height: "100vh", 
//     //   width: "100vw",
//     //   justifyContent: "center", 
//     //   alignItems: "center"  
//     // }}>
//     //   {/* Sidenav */}
//     //   <Sidenav
//     //     color="info"
//     //     brandName="Tidy Wash"
//     //     routes={routes}
//     //   />
//     //    <DashboardNavbar />

//     //   {/* Content Area */}
//     //   <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
//     //     <MDBox display="flex" justifyContent="center" alignItems="center" height="100%">
//     //       <MDTypography variant="h1" color="primary">
//     //         Dashboard Page
//     //       </MDTypography>
//     //     </MDBox>
//     //   </div>
//     // </div>
//     <DashboardLayout>
// <h3>Dashboard</h3>
//       <div style={{ display: "flex", gap: "20px", marginTop: "5%" }}>
//         <div style={{ flex: 1 }}>
//           <DefaultLineChart
//             icon={{ color: "info", component: "show_chart" }}
//             title="Orders This Week"
//             description="Daily order trends"
//             height="20rem"
//             chart={chartData}
//           />
//         </div>

//         <div style={{ flex: 1 }}>
//           <DefaultLineChart
//             icon={{ color: "info", component: "show_chart" }}
//             title="Memberships This Week"
//             description="Daily membership trends"
//             height="20rem"
//             chart={chartData}
//           />
//         </div>
//       </div>
//     </DashboardLayout>
      
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from "react";
import Sidenav from "examples/Sidenav";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Icon from "@mui/material/Icon";
import Orders from "pages/orders";
import Employees from "pages/employees";
import Memberships from 'pages/memberships';

function DashboardPage() {
  console.log("IN DASHBOARD PAGE");
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // New state to prevent rendering

  // useEffect(() => {
  //   const userId = localStorage.getItem("userID");
  //   if (!userId) {
  //     navigate("/");
  //   } else {
  //     setIsAuthenticated(true);
  //   }
  //   setIsCheckingAuth(false);
  // }, [navigate]);

  // if (isCheckingAuth) {
  //   return null; // Nothing is rendered until the check is complete
  // }

  // if (!isAuthenticated) {
  //   return null; // Prevent rendering anything if not authenticated
  // }

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

const ordersData = {
  day: [
    { hour: "9AM", orders: 5, completed: 3, pending: 2 },
    { hour: "12PM", orders: 8, completed: 6, pending: 2 },
    { hour: "3PM", orders: 6, completed: 4, pending: 2 },
    { hour: "6PM", orders: 10, completed: 9, pending: 1 },
  ],
  week: [
    { day: "Mon", orders: 20, completed: 15, pending: 5 },
    { day: "Tue", orders: 35, completed: 30, pending: 5 },
    { day: "Wed", orders: 25, completed: 20, pending: 5 },
    { day: "Thu", orders: 40, completed: 35, pending: 5 },
    { day: "Fri", orders: 32, completed: 30, pending: 2 },
    { day: "Sat", orders: 28, completed: 25, pending: 3 },
    { day: "Sun", orders: 22, completed: 18, pending: 4 },
  ],
  month: [
    { week: "Week 1", orders: 120, completed: 100, pending: 20 },
    { week: "Week 2", orders: 140, completed: 120, pending: 20 },
    { week: "Week 3", orders: 110, completed: 90, pending: 20 },
    { week: "Week 4", orders: 160, completed: 150, pending: 10 },
  ],
};

const membershipsData = [
  { name: "1 Month", value: 120 },
  { name: "3 Month", value: 80 },
];

const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Orders",
        color: "info", // uses theme colors
        data: [20, 35, 25, 40, 32, 28, 22],
      },
    ],
  };

  return (
     <div style={{ display: "flex", 
      flexDirection: "column", 
      height: "100vh", 
      width: "100vw",
      justifyContent: "center", 
      alignItems: "center"  }}>
      {/* Sidenav */}
      <Sidenav
        color="info"
        brandName="Pinky Promise"
        routes={routes}
      />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
       {/* <DashboardNavbar /> */}

      {/* Content Area */}
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        <h3>Dashboard</h3>
               <div style={{ display: "flex", gap: "20px", marginTop: "5%" }}>
             <div style={{ width: "50%"}}>
          <DefaultLineChart
             icon={{ color: "info", component: "show_chart" }}
             title="Orders This Week"
             description="Daily order trends"
             height="20rem"
             chart={chartData}
           />
         </div>

         <div style={{ width: "50%"}}>
           <DefaultLineChart
             icon={{ color: "info", component: "show_chart" }}
            title="Memberships This Week"
            description="Daily membership trends"
            height="20rem"
            chart={chartData}
          />
         </div>
         </div>
      </div>
      </div>
    </div>
  );
}

export default DashboardPage;
