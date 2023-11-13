import { useState } from "react";

import Helmet from "../components/Helmet/Helmet";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const user = userCredentials.user;
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // update user profile
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            // store user data in firestore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success("Account created");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError(error.message);
      toast.error("something went wrong");
    }
  };
  return (
    <Helmet title="Signup">
      <section>
        {loading ? (
          <div className="text-center">
            <h4 className="font-bold text-purple-500 text-[2rem]">
              Loading...
            </h4>
          </div>
        ) : (
          <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-0">
            <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
            {error ? <p className="bg-red-300 p-3 my-2">{error}</p> : null}
            <form onSubmit={handleSubmit}>
              <div className="my-6 form__group">
                <label>Username</label>
                <div>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="mb-6 form__group">
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
              <div className="mb-6 form__group">
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
              <div className="mb-6 form__group">
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                />
              </div>
              <button
                type="submit"
                className="w-full my-2 p-3  rounded-2xl shadow-xl text-[var(--primary-color)] bg-white"
              >
                Sign up
              </button>
            </form>
            <p className="my-4 flex items-center gap-2 justify-center">
              Already have an account?
              <Link
                to="/login"
                className="text-[var(--primary-color)] font-semibold"
              >
                Sign in
              </Link>
            </p>
          </div>
        )}
      </section>
    </Helmet>
  );
};

export default Signup;
