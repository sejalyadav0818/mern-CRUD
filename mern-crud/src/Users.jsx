import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([{
    Name: "sejal", email: "sejalyadav122@gmail.com", Age: 21 
  }]);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr key={user.email}>
                  <td>{user.Name}</td>
                  <td>{user.email}</td>
                  <td>{user.Age}</td>
                  <td><button>Edit</button><button>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
