import { useState } from "react";

function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  function handleRegister(e){

    e.preventDefault();

    if(name==="" || email==="" || password===""){
      alert("Please fill all fields");
      return;
    }

    alert("Registration Successful");

    setName("");
    setEmail("");
    setPassword("");

  }

  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Register
            </h2>

            <form onSubmit={handleRegister}>

              <input
                className="form-control mb-3"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />

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

              <button className="btn btn-primary w-100">
                Register
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Register;