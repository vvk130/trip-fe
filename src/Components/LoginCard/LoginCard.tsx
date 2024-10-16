import Station from "../Forms/Station";
import LoginForm from "../Forms/Login";
import "./LoginCard.css";
import SearchBar from "../Forms/SearchBar";

const LoginCard = (): JSX.Element => {
  return (
    <div className="login-container">
      <h1>Login or SignUp here:</h1>
      <LoginForm />
      <Station />
      <SearchBar />
    </div>
  );
};

export default LoginCard;
