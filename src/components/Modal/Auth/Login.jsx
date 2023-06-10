import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {};
  const onChange = (event) => {
    // update form state
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        onChange={onChange}
      />
      <Input
        name="password"
        placeholder="password"
        type="password"
        onChange={onChange}
      />
      <Button width="100%" height="36px" type="submit" mt={2} mb={2}>Log In</Button>
    </form>
  );
};

export default Login;
