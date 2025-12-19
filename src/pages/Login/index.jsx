import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Save a mock email to sessionStorage (so dashboard pages see a "logged in" user)
    sessionStorage.setItem("userEmail", "test@accionlabs.com");

    // Redirect instantly
    navigate("/portfolio", { replace: true });
  }, []);

  return null; // nothing to show on screen
};

export default LoginPage;
