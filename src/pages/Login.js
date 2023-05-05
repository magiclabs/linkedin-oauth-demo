import { magic } from "../lib/magic";
import { FaLinkedin } from "react-icons/fa";

const Login = () => {
  const handleSocialLogin = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "linkedin",
        redirectURI: new URL("/dashboard", window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Magic Auth + LinkedIn</h1>
      <button onClick={handleSocialLogin}>
        <FaLinkedin size={"2.5rem"} />
        Log in with LinkedIn
      </button>
    </div>
  );
};

export default Login;
