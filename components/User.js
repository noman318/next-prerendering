import React from "react";

function User({ user }) {
  //   console.log("users props", user);
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
}

export default User;
