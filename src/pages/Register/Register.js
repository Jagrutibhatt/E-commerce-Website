// import userEvent from "@testing-library/user-event";
import { useState, useTransition } from "react";
import "./Register.css";

function Register() {
  const [user, setUser] = useState({});

  function handleFormSubmit(event) {
    console.log(user);
    console.log(user.name);
    console.log(user.address);

    // console.log(event.target.email.value);
  }

  return (
    <div className="register-form">
      <h3>Please Register</h3>
      <hr />
      <form onSubmit={handleFormSubmit} action="">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            onInput={(e) => {
              if (!user.name) user.name = {};
              user.email = e.target.value;
              setUser(user);
            }}
            className="form-control"
            type="email"
          />
        </div>
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="" className="form-label">
              First Name{" "}
            </label>
            <input
              onInput={(e) => {
                if (!user.name) user.name = {};
                user.name.firstname = e.target.value;
                setUser(user);
              }}
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="" className="form-label">
              Last Name{" "}
            </label>
            <input
              onInput={(e) => {
                if (!user.name) user.name = {};
                user.name.lastname = e.target.value;
                setUser(user);
              }}
              className="form-control"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="" className="form-label">
              Username{" "}
            </label>
            <input
              onInput={(e) => {
                user.username = e.target.value;
                setUser(user);
              }}
              className="form-control"
              type="text"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password{" "}
          </label>
          <input
            onInput={(e) => {
              user.password = e.target.value;
              setUser(user);
            }}
            className="form-control"
            type="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Phone Number{" "}
          </label>
          <input
            onInput={(e) => {
              user.phone = e.target.value;
              setUser(user);
            }}
            className="form-control"
            type="tell"
          />
        </div>
        <h4>Address</h4>
        <div className="row">
          <div className="mb-3 col-6">
            <input
              onInput={(e) => {
                if (!user.address) user.address = {};
                user.address.number = e.target.value;
                setUser(user);
              }}
              placeholder="Flat Number"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3 col-6">
            <input
              onInput={(e) => {
                if (!user.address) user.address = {};
                user.address.street = e.target.value;
                setUser(user);
              }}
              placeholder="Street"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3 col-6">
            <input
              onInput={(e) => {
                if (!user.address) user.address = {};
                user.address.city = e.target.value;
                setUser(user);
              }}
              placeholder="City"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3 col-6">
            <input
              onInput={(e) => {
                if (!user.address) user.address = {};
                user.address.zipcode = e.target.value;
                setUser(user);
              }}
              placeholder="Pincode"
              className="form-control"
              type="text"
            />
          </div>
        </div>
        <button type="submit" className="btn-success btn float-end">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
