import { useState } from "react";

import Helmet from "../components/Helmet/Helmet";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      toast.success("Logged in  successfully");
      navigate("/checkout");
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <Helmet title="Login">
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold text-center mb-4">Log In</h1>
        {error ? <p className="bg-red-300 p-3 my-2">{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className="my-6 form__group">
            <label>Email</label>
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="my-6 form__group">
            <label>Password</label>
            <div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full my-2 p-3  rounded-2xl shadow-xl text-[var(--primary-color)] bg-white"
          >
            Log in
          </button>
        </form>
        <p className="my-4 flex items-center gap-2 justify-center">
          Dont have an account?
          <Link
            to="/signup"
            className="text-[var(--primary-color)] font-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </Helmet>
  );
};

export default Login;
