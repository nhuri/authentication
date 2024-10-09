import "./users.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RegisterPage from "./RegisterPage";
import {
  useForgotPasswordMutation,
  useIsAuthQuery,
  useLoginMutation,
  useLogoutMutation,
} from "../slices/userApiSlice";
import { useDispatch } from "react-redux";
import { logout, setUserInfoOnLoginOrRegister } from "../slices/authSlice";
import Loader from "../components/Loader";

const Login = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const handleCloseRegisterModal = () => setRegisterModal(false);
  const handleOpenRegisterModal = () => {
    setRegisterModal(true);
  };

  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const handleCloseForgotPasswordModal = () => setForgotPasswordModal(false);
  const handleOpenForgotPasswordModal = () => setForgotPasswordModal(true);
  const [forgotPassword, { isLoading1 }] = useForgotPasswordMutation();

  const [loginModal, setLoginModal] = useState(false);

  const handleCloseLoginModal = () => setLoginModal(false);
  const handleOpenLoginModal = () => setLoginModal(true);
  const [login, { isLoading }] = useLoginMutation();

  const [logout] = useLogoutMutation();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout().unwrap();
    setBool(false);
  };

  const handleVerifyDetails = async (e) => {
    e.preventDefault();
    logout().unwrap();
    const response = await login({ mail, password }).unwrap();
    dispatch(setUserInfoOnLoginOrRegister({ ...response }));
    if (response.status === "success") {
      handleCloseLoginModal();
      handleCloseForgotPasswordModal();
      setBool(true);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (mail === "") {
      alert("You must enter mail before you press on forgot password");
    } else {
      const response = forgotPassword({ mail }).unwrap();
      dispatch(setUserInfoOnLoginOrRegister({ ...response }));
      handleCloseLoginModal();
      alert(
        "Enter to your mail and Press on the link in the mail you got right now"
      );
    }
  };
  const [bool, setBool] = useState(true);
  const { data } = useIsAuthQuery();
  useEffect(() => {
    if (data) {
      setBool(data.isAuth);
    }
  }, [data]);
  useEffect(() => {
    bool;
  }, [bool]);

  // useEffect(() => {
  //   if (data) {
  //     setBool(data.isAuth);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   console.log(bool);
  // }, [bool]);

  return (
    <>
      <div id="login">
        {!bool && (
          <button id="openLoginModal" onClick={handleOpenLoginModal}>
            <img src="images/login.png" alt="sc-icon" />
          </button>
        )}
        {bool && (
          <button id="openLogoutModal" onClick={handleLogout}>
            <img src="images/logout.jpg" alt="sc-icon" />
          </button>
        )}
      </div>

      <Modal show={registerModal} onHide={handleCloseRegisterModal}>
        <Modal.Header closeButton>
          <Modal.Title>Register form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterPage />
        </Modal.Body>
      </Modal>

      <Modal show={forgotPasswordModal} onHide={handleCloseForgotPasswordModal}>
        <Modal.Header closeButton>
          <Modal.Title>ForgotPassword form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            id="usernameLogin"
            placeholder="enter your mail"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          />
          <Button
            id="forgot-password-btn"
            variant="primary"
            onClick={handleForgotPassword}
          >
            forgot password
          </Button>
        </Modal.Body>
      </Modal>

      <Modal show={loginModal} onHide={handleCloseLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="userLogin">
            <input
              type="text"
              id="usernameLogin"
              placeholder="enter your mail"
              onChange={(e) => setMail(e.target.value)}
              value={mail}
            />
            <input
              type="text"
              id="passwordLogin"
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button
              id="login-btn"
              variant="primary"
              onClick={handleVerifyDetails}
            >
              login
            </Button>
            {isLoading && <Loader />}
            {/* {isLoading2 && <Loader />} */}
            <Button
              id="register-btn"
              variant="tertiary"
              onClick={handleOpenRegisterModal}
            >
              register
            </Button>
            <Button
              id="forgot-password-btn"
              variant="primary"
              onClick={handleOpenForgotPasswordModal}
            >
              forgot password
            </Button>
            {isLoading1 && <Loader />}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLoginModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseLoginModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Login;
