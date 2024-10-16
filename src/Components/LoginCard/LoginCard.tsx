import LoginForm from "../Forms/Login";
import "./LoginCard.css";

const LoginCard = (): JSX.Element => {
  return (
    <div className="login-container">
      <h1>Login or SignUp here:</h1>
      <LoginForm />
    </div>
  );
};

export default LoginCard;
