import './style.scss';
import {useRef, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { addLogin, addToken } from '../../redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function verifEmail(email) {
  let emailRegExp = new RegExp("[a-z]+@[a-z]+\.[a-z]{2,3}")
  return emailRegExp.test(email.value)
}

function verifPassword(password) {
  let passwordRegExp = new RegExp("[a-zA-Z0-9._-]+")
  return passwordRegExp.test(password.value)
}

function Login() {

    const form = useRef()
    const dispatch = useDispatch()
    const isConnect = useSelector((state) => state.user.isConnected)

    const handleSubmit = async (e) => {
      e.preventDefault();
      const postData = {
        email: form.current[0].value,
        password: form.current[1].value,
      };
      if (verifEmail(form.current[0]) && verifPassword(form.current[1])) {
        try{
        const r = await fetch('http://localhost:3001/api/v1/user/login',  {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(postData)    
          })
          const data = await r.json() 
          const token = data.body.token
          dispatch(addLogin(postData))
          dispatch(addToken(token))
        }
        catch(err) {
          alert(err)
        }
      }
      else {
        alert("erreur dans les champs")
      }
      }
    
    const [checked, setChecked] = useState(false);
    const tooglecheck = () => {
        setChecked(!checked)
    }

   if(isConnect===true) {
      return <Navigate to="/profile" />
    }

    return (
      <div className="background-color">
          <section className='section'>
          <FontAwesomeIcon icon={faCircleUser} />
          <h1>Sign in</h1>
          <form ref={form} onSubmit={handleSubmit}>
            <label className='label'>Username:
              <input  className='input' type="text" name='username' />
            </label>
            <label className='label'>Password:
              <input  className='input' type="text" name='password' />
            </label>
            <label className='checkbox'>Remember me
            <input type='checkbox' checked={checked} onChange={tooglecheck}/>
            </label>          
            <input className='button-submit' type="submit" value="Sign In" />
          </form>
          </section>
      </div>
    )}
    
export default Login;
