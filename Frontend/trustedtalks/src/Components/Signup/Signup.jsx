import PropTypes from 'prop-types';
import styles from "./Signup.module.css";
import { Card, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const Signup = (props) => {
    const { button, sub, action } = props;


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = () => {

        const data = {
            username: username,
            password: password
        }
    

    if(action === "signup"){
        axios.post("https://trustedtalks.onrender.com/user/signup", data)
        .then((res) => {
            console.log(res);
            alert(res.data.message);
            localStorage.setItem("token", res.data.token);
            window.location = "/Chats"
        })
        .catch((err)=> {
            console.log(err);
            alert(err.response.data.message);
        })
    }else if(action === "login"){
        axios.post("https://trustedtalks.onrender.com/user/login", data)
        .then((res)=> {
            console.log(res);
            alert(res.data.message);
            localStorage.setItem("token", res.data.token);
            window.location = "/Chats"
        })
        .catch((err)=> {
            console.log(err);
            alert(err.response.data.message);
        })
    }

}

    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <Typography variant="h4">Trusted Talks</Typography>
            </div>


            <Card className={styles.card}>
                <form className={styles.content}>
                    <div className={styles.username}>
                        <Typography variant="subtitle1" >Username</Typography>
                        <input onChange = {(e)=> setUsername(e.target.value)} />
                    </div>
                    <div className={styles.password}>
                        <Typography variant="subtitle1"  >Password</Typography>
                        <input type="password" onChange = {(e)=> setPassword(e.target.value)} />
                    </div>
                    <div className={styles.button}>
                        <Button variant="contained" onClick={submitHandler}>{button}</Button>
                    </div>
                    <div className={styles.sub}>
                        <Typography variant="body2">Already have an account? <Link to = {`/${sub}`}>{sub}</Link></Typography>
                    </div>
                </form>
            </Card>

        </div>
    );
};

Signup.propTypes = {
    button: PropTypes.string, 
    sub: PropTypes.string.isRequired, 
    action: PropTypes.string.isRequired,
};

export default Signup;
