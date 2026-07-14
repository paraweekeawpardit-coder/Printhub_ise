"use client";

import {
    Dispatch,
    SetStateAction,
    useState
} from "react";

// import Loginform from "@/components/loginform";
// import Registerform from "@/components/registerform";
import "./Auth.css";

type Props = {
    setAuth: Dispatch<SetStateAction<boolean>>
}

export default function Auth({ setAuth }: Props) {
    console.log("start");
    const [isLogin, setIslogin] = useState(true);
    console.log("isLogin:", isLogin)

    return (
        <div className="auth-page">

            <div className="auth-logo">
                <img
                    className="bar-logo"
                    src="/loco.png"
                    alt="logo"
                />
            </div>
                {
                    isLogin ? (
                        <Loginform
                            setAuth={setAuth}
                            setIslogin={setIslogin}
                        />
                    ) : (

                        <Registerform
                            setIslogin={setIslogin}
                        />

                    )

                }

            </div>

        </div>
    );
}