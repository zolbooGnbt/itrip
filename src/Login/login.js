import React, { useState, useEffect } from "react";
import axios from "axios";
import Register from "./register";
import { ArrowRight } from "react-bootstrap-icons";


function Login({ data, setData }) {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginName, setLoginName] = useState("");
    const [loginPassword, setLoginPassword] = useState("")
    const [clickedSignup, setClickedSignup] = useState(false);



    function ClickedSignUp() {
        setClickedSignup(true)
    }
    function ClickedLogin() {
        setClickedSignup(false)
    }

    function SignUpHandler() {
        setUsername("");
        setPassword("");
        var users = {
            userName: userName,
            password: password,

        }
        const checkData = data.find((userCheck) => userCheck.userName === userName);
        if (checkData) {
            alert("Username already taken!")
        } else {
            if (userName === 'zolboo') {
                axios.post("https://react-45bf8-default-rtdb.asia-southeast1.firebasedatabase.app/user.json", users)
                    .then(response => {
                        users.admin = true;
                        localStorage.setItem("admin", response.data.admin)
                    }).catch(error => alert("error"))
            } else  {
                axios.post("https://react-45bf8-default-rtdb.asia-southeast1.firebasedatabase.app/user.json", users)
                    .then(res => {
                        localStorage.setItem("currentUser", res.data.currentUser)
                        alert("amjilttai burteglee")
                    }).catch(error => alert("error"))
            }

        }

    }


    useEffect(() => {
        axios.get("https://react-45bf8-default-rtdb.asia-southeast1.firebasedatabase.app/user.json").then(response => {
            var x = Object.values(response.data)
            setData(x)
        }).catch(error => (alert("error")));
    }, [setData])


    function LoginHandler(e) {
        setLoginName(e.target.value)

        const userData = data.find((user) => user.userName === loginName);

        if (userData) {
            if (loginName === "zolboo") {
                document.location.pathname = "./"
                localStorage.setItem("admin", data.admin)
            }
            else if (userData.password !== loginPassword) {
                alert("invalid username or password, try again");
                window.location.reload();
            } else {
                document.location.pathname = "./"
                localStorage.setItem("currentUser", data.currentUser)
            }
        } else {
            alert("user not found")
            window.location.reload();
        }

    }

    return (
        <div className="login-container">
            {!clickedSignup ? (
                <div className="login-box">
                    <h3 className="login-title">Нэвтрэх</h3>
                    <div className="login-input-div">
                        <input
                            className="login-input"
                            type="text"
                            value={loginName}
                            onInput={(e) => setLoginName(e.target.value)}
                            placeholder="И-мэйл эсвэл утасний дугаар"
                        >
                        </input>
                        <input
                            className="login-input"
                            type="password"
                            value={loginPassword}
                            onInput={(e) => setLoginPassword(e.target.value)}
                            placeholder="Нууц үг"
                        >
                        </input>
                    </div>
                    <button className="login-button" onClick={LoginHandler}>Login</button>
                    <div className="signup-line">
                        <p className="login-p"> Шинэ хэрэглэгч ?</p>
                        <button onClick={ClickedSignUp} className="signup-button">
                            Бүртгүүлэх <ArrowRight></ArrowRight>
                        </button>
                    </div>
                </div>)
                : (
                    <Register userName={userName}
                        setUsername={setUsername}
                        password={password}
                        setPassword={setPassword}                  
                        SignUpHandler={SignUpHandler}
                        clickedSignup={clickedSignup}
                        data={data}
                        ClickedLogin={ClickedLogin} />
                )
            }
            {data.map = ((item, index) => (
                <li key={index}>{item.userName}{item.password}</li>
            ))}
        </div>
    )

}
export default Login