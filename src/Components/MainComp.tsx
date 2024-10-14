import ChildrenProps from "../Types/ChildrenProps";

const MainComp = ({ children }: ChildrenProps): JSX.Element => {
  return <div className="main-container">{children}</div>;
};

export default MainComp;
