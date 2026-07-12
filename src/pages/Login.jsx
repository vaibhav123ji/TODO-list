import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    if(email === "" || password === ""){
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful");

    setEmail("");
    setPassword("");

  }

  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Login
            </h2>

            <form onSubmit={handleSubmit}>

              <input
                className="form-control mb-3"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />

              <input
                className="form-control mb-3"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

              <button className="btn btn-success w-100">
                Login
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Login;