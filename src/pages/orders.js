import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DataTable from "examples/Tables/DataTable";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Orders() {
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
        Cell: ({ value, row }) => {
          const handlePickupChange = async (e) => {
            const selectedEmployeeId = e.target.value;
            try {
              await axios.patch(
                `https://orderservice-ws6i.onrender.com/api/orders/${row.original.order_id}/assignToEmployee`,
                { pickup_employee_id: selectedEmployeeId }
              );
              alert("Pickup employee assigned successfully.");

              setRows(prevRows =>
                prevRows.map(idx => 
                  idx.order_id === row.original.order_id
                    ? { 
                        ...idx, 
                        pickup: { 
                          ...idx.pickup, 
                          employeeId: selectedEmployeeId 
                        } 
                      }
                    : idx
                )
              );
            } catch (err) {
              console.error("Failed to assign pickup employee", err);
              alert("Error assigning pickup employee");
            }
          };
      
          return (
            <div style={{ whiteSpace: "pre-line" }}>
              Pickup Slot: {value.slot}
              {"\n"}Pickup Date: {value.date}
              {"\n"}Pickup Employee:
              <select value={value.employeeId || ""} onChange={handlePickupChange}>
                <option value="">-- Select Employee --</option>
                {names.map((emp) => (
                  <option key={emp.id} value={emp.id}>{emp.name}</option>
                ))}
              </select>
            </div>
          );
        },
      },
      {
        Header: "Delivery Info",
        accessor: "delivery",
        align: "left",
        Cell: ({ value, row }) => {
          console.log("ROW", row);
          const handleDeliveryChange = async (e) => {
            const selectedEmployeeId = e.target.value;
            try {
              await axios.patch(
                `https://orderservice-ws6i.onrender.com/api/orders/${row.original.order_id}/assignToEmployee`,
                { delivery_employee_id: selectedEmployeeId }
              );
              alert("Delivery employee assigned successfully.");

              setRows(prevRows =>
                prevRows.map(idx => 
                  idx.order_id === row.original.order_id
                    ? { 
                        ...idx, 
                        delivery: { 
                          ...idx.delivery, 
                          employeeId: selectedEmployeeId 
                        } 
                      }
                    : idx
                )
              );
            } catch (err) {
              console.error("Failed to assign delivery employee", err);
              alert("Error assigning delivery employee");
            }
          };
      
          return (
            <div style={{ whiteSpace: "pre-line" }}>
              Delivery Slot: {value.slot}
              {"\n"}Delivery Date: {value.date}
              {"\n"}Delivery Employee:
              <select value={value.employeeId || ""} onChange={handleDeliveryChange}>
                <option value="">-- Select Employee --</option>
                {names.map((emp) => (
                  <option key={emp.id} value={emp.id}>{emp.name}</option>
                ))}
              </select>
            </div>
          );
        },
      },      
      { Header: "Status", accessor: "status", align: "left" },
    ];    

      useEffect(() => {
        const fetchAllOrders = async () => {
          try {
            const response = await axios.get("https://orderservice-ws6i.onrender.com/api/orders/getAllOrders");
            const data = response.data;

            const formattedRows = data.map((order, index) => {
              return {
                id: index + 1,
                order_id: order.id,
                customer: `Phone Number: ${order.customer.user.phone_number.number}`,
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
            const response = await axios.get("https://tidywashbackend.onrender.com/api/getAllEmployees"); // Adjust URL if needed
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

    return (
      <DashboardLayout>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 style={{ margin: 0 }}>Orders</h1>
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

export default Orders;