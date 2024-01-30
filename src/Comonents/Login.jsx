import { Link } from "react-router-dom";

function Login() {
  return (
    <main className=" flex bg-gray-300 h-[100vh]  justify-center items-center">
      <div className="rounded-lg w-[35%] bg-white py-6 px-6">
        <h1 className="mb-3 text-center text-[1.5rem] ">
          Login into your Account
        </h1>
        <form action="">
          <input
            type="text"
            placeholder="Loginid"
            className="mb-4 w-full block border-solid border-[2px] px-1 py-1 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 block w-full border-solid border-[2px] px-1 py-1 rounded-lg"
          />
          <Link to="/customer">
            <button
              type="submit"
              className="bg-blue-700 w-full py-2 px-4 rounded text-white"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
}

export default Login;
