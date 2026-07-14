"use client"

import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import "@/styles/register.css"

type Props = {
    setIslogin: Dispatch<SetStateAction<boolean>>
}

export default function Registerform({ setIslogin}: Props) {
    console.log("regis")
    const [message, setMessage] = useState("");
    const [registerData, setRegisterData] = useState({
        name: "",
        password: "",
        contact: ""
    });
    console.log("regis")

    const storageData = { count: 1, date: null };


    async function handleSubmit() {

        try {
            console.log("submit")
            const res = await axios.post(
                "http://localhost:5000/api/auth/register",
                registerData
            );

            if (res.data.message) {
                setIslogin(true);
                
                const storageData = { count: 1, Date: null };
                localStorage.setItem("user-Storage", JSON.stringify(storageData));
    
            } else {
                console.log("not have data");
                setMessage(
                    res.data.error
                );
            }

            setRegisterData({
                name: "",
                password: "",
                contact: ""
            });


        } catch (err) {

            console.log(err);

            setRegisterData({
                name: "",
                password: "",
                contact: ""
            });

        }
    }

        return (

        <div className="container">

            <h1 className="header">
                Register
            </h1>

            <form
                className="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("register clicked!")
                    handleSubmit();
                }}
            >

                <div className="inputBox">

                    <label>username</label>

                    <input
                        className="blank"
                        type="text"
                        value={registerData.name}
                        onChange={(e) => {
                            setRegisterData({
                                ...registerData,
                                name: e.target.value
                            })
                        }}
                    />

                </div>

                <div className="inputBox">

                    <label>phone </label>

                    <input
                        className="blank"
                        type="text"
                        value={registerData.contact}
                        onChange={(e) => {
                            setRegisterData({
                                ...registerData,
                                contact: e.target.value
                            })
                        }}
                    />

                </div>

                <div className="inputBox">

                    <label>password</label>

                    <input
                        className="blank"
                        type="password"
                        value={registerData.password}
                        onChange={(e) => {
                            setRegisterData({
                                ...registerData,
                                password: e.target.value
                            })
                        }}
                    />

                </div>

                <div>
                    <button
                        className="submit-btn"
                        type="submit"
                    >
                    Log in
                    
                    </button>
                </div>

                {/* <div className="privacy">

                    <input type="checkbox" />

                    <span>
                        privacy information
                    </span>

                </div> */}

                <p className="message">
                    {message}
                </p>

                <button 
                    className="submitBtn" 
                    type="submit"
                    onClick={() => {
                        console.log("button clicked directly!")
                        handleSubmit()
                    }}
                >
                    Register
                </button>


            </form>


        </div>
    )
}