import React, { useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import Typed from "react-typed";
import "../../../src/styles.css"
import { Link, Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../store/auth/thunks'
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = () => {
  
  const dispatch = useDispatch();

  const { status } = useSelector((state)=> state.auth);

  const isChecking = useMemo(() => status === 'checking', [status])

  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({email, password});
    dispatch(startLoginWithEmailPassword({email, password}));
    navigate("/", {
      replace: true,
    });
  }

  const onGoogleSignIn = ()=>{
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
    navigate("/", {
      replace: true,
    });
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column vw-100 vh-100 bg-dark ">
        <img
          className=" rounded-circle" 
          src="https://c.tenor.com/OrWIV_jmwE0AAAAM/heart-i-love-you.gif"
          alt="gif"
        />
        <form onSubmit={onSubmit}>
          <Typed
          className="d-flex justify-content-center text-white logintyping"
            strings={[
              '"Bad Deadpool... Good Deadpool!"',
              '"Say the magic words, Fat Gandalf."',
              '"This is my most prized possession.."',
              '"Captain Deadpool! No, just Deadpool."',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <div className="d-grid gap-2 mt-3">
            <input
              className="inputlogin"
              style={{width:"40vw", borderRadius:"0.2em", padding:"0.5em"}}
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              
              name='email'
              value={email}
              onChange={onInputChange}
            />
            <input
              className="inputlogin"
              style={{width:"40vw", borderRadius:"0.2em", padding:"0.5em"}}
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              
              name="password"
              value={password}
              onChange={onInputChange}
            />
            <button disabled={isChecking} className="btn btn-outline-primary mt-3" type="submit">
              Login
            </button>
            <button  className="btn btn-outline-primary mt-3" type="submit"onClick={onGoogleSignIn}
                disabled={isChecking} >
            Google
            </button>
            <Link component={RouterLink} color="inherit" to="/auth/register" style={{display: 'flex', justifyContent: 'end'}}>
              Crear una cuenta
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
