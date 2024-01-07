import React from "react";
import { useState, useEffect } from "react";

export const LoginPage = () => {
  const [loginValue, setloginValue] = useState({
    name: "",
    password: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("loginValue");
    if (storedData) {
      setloginValue(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setloginValue({
      ...loginValue,
      [name]: value,
    });
  };

  useEffect(() => {
    localStorage.setItem("loginValue", JSON.stringify(loginValue));
  }, [loginValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginValue);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};
