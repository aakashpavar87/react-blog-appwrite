import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import "./App.css";
import { login, logout } from "./store/authSlice";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(authService.aakash);
    authService
      .getUserData()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => console.log("Error from App.jsx :: ", err))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    ""
  ) : (
    <div className="text-lg text-red-200">
      {/* <Footer /> */}
      hello
    </div>
  );
}

export default App;
