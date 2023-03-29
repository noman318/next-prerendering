import User from "@/components/User";
import React from "react";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
function Users({ users }) {
  // console.log("props", { users });
  return (
    <>
      <h2>User List</h2>
      {users?.map((data, id) => (
        <div key={data?.id}>
          <User user={data} />
        </div>
      ))}
    </>
  );
}

export default Users;
