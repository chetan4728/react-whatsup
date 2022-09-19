import Auth from "../components/auth";
import Main from "./main";

const Login = () => {
    const token = localStorage.getItem("token");
    return (true ? <Main></Main> : <Auth></Auth>)
 }
export default Login;