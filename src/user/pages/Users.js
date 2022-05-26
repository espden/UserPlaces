import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [{ id: "u1", name: "Max Schwarz", image: "https://images.unsplash.com/photo-1653411461895-ecfc868f1195?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685", places: 3 }];
  return <UsersList items={USERS} />;
}

export default Users;
