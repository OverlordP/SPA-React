import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const onclick = () => {
    navigate("/", {replace: true,});
  };
  return (
    <div className="container p-2">
      Login PS
      <hr/>
      <button onClick={onclick} className="btn btn-dark btn-lg" >
        click me
      </button>
    </div>
  );
}

export default Login;
