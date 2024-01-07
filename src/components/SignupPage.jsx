import React from "react";
import { useState, useEffect } from "react";

export const SignupPage = () => {
  const [inputValue, setinputValue] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    number: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("inputValue");
    if (storedData) {
      setinputValue(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    // console.log(value);

    setinputValue({
      ...inputValue,
      [name]: value,
    });
  };

  useEffect(() => {
    localStorage.setItem("inputValue", JSON.stringify(inputValue));
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div>
      <h1>SignUp Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          onChange={handleChange}
          value={inputValue.name}
        />
        <input
          type="email"
          placeholder="enter your eamil"
          name="email"
          onChange={handleChange}
          value={inputValue.email}
        />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          onChange={handleChange}
          value={inputValue.password}
        />
        <input
          type="gender"
          placeholder="enter your gender"
          name="gender"
          onChange={handleChange}
          value={inputValue.gender}
        />
        <input
          type="number"
          placeholder="enter your number"
          name="number"
          onChange={handleChange}
          value={inputValue.number}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
