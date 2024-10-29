import React, { useEffect, useState } from "react";
import "./Customers.css";
import CustomerService from "./CustomerService";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [customerData, setCustomerData] = useState({
    username: "",
    city: "",
    age: "",
    email: "",
    status: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCustomers = async () => {
    try {
      const response = await CustomerService.getAllCustomers();
      if (!response) {
        alert("Not Logged In");
      }
      setCustomers(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []); // Fetch customers on component mount

  const handleDeleteCustomer = async (id) => {
    try {
      const response = await CustomerService.deleteCustomer(id);
      console.log(response);
      fetchCustomers();
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  return (
    <div>
      <h1>Customers</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th><th>City</th><th>Age</th><th>Email</th><th>Status</th><th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.username}</td>
              <td>{customer.city}</td>
              <td>{customer.age}</td>
              <td>{customer.email}</td>
              <td>{customer.status}</td>
              <td>
                <button onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
