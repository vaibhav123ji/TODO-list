import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">

      <div className="text-center">

        <h1 className="display-4 fw-bold">
          Welcome to Todo App
        </h1>

        <p className="lead mt-3">
          Manage your daily tasks quickly and easily.
        </p>

        <Link to="/todo" className="btn btn-primary btn-lg mt-3">
          Get Started
        </Link>

      </div>

      <div className="row mt-5">

        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h3>📝 Add Tasks</h3>
            <p>Create your daily tasks in seconds.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h3>✅ Complete Tasks</h3>
            <p>Mark completed tasks with one click.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h3>🗑 Delete Tasks</h3>
            <p>Remove unnecessary tasks anytime.</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;