import { ArrowRight } from "react-bootstrap-icons"

const Register = ({ userName, setUsername, password, setPassword, SignUpHandler, ClickedLogin, clickedSignup }) => {

    return (
        <div className="login-container">
            {clickedSignup ? (
                <div className="login-box">
                    <h3 className="login-title">Бүртгүүлэх</h3>
                    <div className="login-input-div">
                        <input
                            className="login-input"
                            type="text"
                            value={userName}
                            onInput={(e) => setUsername(e.target.value)}
                            placeholder="И-мэйл эсвэл утасний дугаар"
                        >
                        </input>
                        <input
                            className="login-input"
                            type="password"
                            value={password}
                            onInput={(e) => setPassword(e.target.value)}
                            placeholder="Нууц үг"
                        >
                        </input>
                    </div>
                    <button className="login-button" onClick={SignUpHandler}>SignUp</button>
                </div>)
                : (
                    <Register userName={userName}
                        setUsername={setUsername}
                        password={password}
                        setPassword={setPassword}
                        SignUpHandler={SignUpHandler} />
                )
            }
            <div className="login-line">
                <p className="sigup-p"> Бүртгэлтэй хэрэглэгч ?</p>
                <button onClick={ClickedLogin} className="signup-button">
                    Нэвтрэх <ArrowRight></ArrowRight>
                </button>
            </div>
        </div>)
}
export default Register