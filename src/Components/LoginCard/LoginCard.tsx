import WithMaterialUI from "../Forms/Login";
import "./LoginCard.css";

const LoginCard = (): JSX.Element => {
  return (
    <div className="login-container">
      <h1>Login or SignUp here:</h1>
      <WithMaterialUI />
    </div>
  );
};

export default LoginCard;
