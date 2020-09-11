import React from "react";
import { useForm } from "react-hook-form";
import "./Shipment.css";
import { useContext } from "react";
import { userContext } from "../../App";

const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log("Shippment data", data);
  let [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        name="name"
        placeholder="your name"
        ref={register({ required: true })}
      />
      {errors.name && <span className="error">name is required</span>}
      <input
        name="email"
        placeholder="your email"
        defaultValue={loggedInUser.email}
        ref={register({ required: true })}
      />
      {errors.email && <span className="error">email is required</span>}
      <input
        name="address"
        placeholder="your address"
        ref={register({ required: true })}
      />
      {errors.address && <span className="error">address is required</span>}
      <input
        name="phone"
        placeholder="your phone number"
        ref={register({ required: true })}
      />
      {errors.phone && <span className="error">phone number is required</span>}

      <input type="submit" />
    </form>
  );
};

export default Shipment;
