"use client"

import axios from "axios";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import "@/styles/login.css";

type Props = {
    setAuth: Dispatch<SetStateAction<boolean>>
    setIslogin: Dispatch<SetStateAction<boolean>>
}

export default function Loginform({setAuth,setIslogin}: Props) {

    const [message, setMessage] = useState("");
    const [loginData, setLoginData] = useState({
        name: "",
        password: ""
    });

    
    async function handleSubmit() {

        try {

            const res = await axios.post(
            "http://localhost:5000/api/auth/login",
            loginData
            );

            if (res.data.token && res.data.id && res.data.name) {
                localStorage.setItem("token",res.data.token);
                localStorage.setItem("id",res.data.id);
                localStorage.setItem("username",res.data.name);
                
    
                setAuth(true);
            } else {
                console.log("worng password")
                setMessage(res.data.error);
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (

        <div className="login-container">

            <h1 className="header">
                Log in
            </h1>

            <form
                className="login-form"
                onSubmit={(e) => { e.preventDefault(); handleSubmit();}}
            >

                <label className="label">
                    username
                </label>

                <input
                    className="blank"
                    type="text"
                    value={loginData.name}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setLoginData({
                            ...loginData,
                            name: e.target.value
                        })
                    }}
                />

                <label className="label">
                    password
                </label>

                <input
                    className="blank"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => {
                        setLoginData({
                            ...loginData,
                            password: e.target.value
                        })
                    }}
                />

                <div className="remember-box">
                    <input type="checkbox" />
                    <span>
                        remember me
                    </span>
                </div>

                <p className="register-text">
                    if you don't have account please
                    <span 
                        className="register-link"
                        onClick={() => setIslogin(false)}
                        style={{ cursor: "pointer" }}
                    >
                        Register
                    </span>
                </p>

                <button
                    className="submit-btn"
                    type="submit"
                >
                    Log in
                </button>

                <button
                    type="button"
                    className="social-login"
                >
                    <img
                        src="/mail.png"
                        alt="gmail"
                    />
                    <span>
                        Log in with Gmail
                    </span>
                </button>

                <p className="message">
                    {message}
                </p>
            </form>
        </div>
    )
}