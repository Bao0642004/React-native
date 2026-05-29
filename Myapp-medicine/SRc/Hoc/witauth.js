import { useSelector } from "react-redux";
import Dangnhap from "../Screen/Login/Login";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { token } = useSelector((state) => state.auth);
    if (!token) {
      return <Dangnhap {...props} />;
    }
    return <WrappedComponent {...props} />;
  };
};
export default withAuth;