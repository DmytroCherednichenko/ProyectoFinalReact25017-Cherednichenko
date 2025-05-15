import { useNavigate } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("auth", "true");
        navigate("/profile/user123");
    };

    return (
        <div>
            <Button onClick={()=>handleLogin()}>LOL</Button>
        </div>
    )
}

export default Login;