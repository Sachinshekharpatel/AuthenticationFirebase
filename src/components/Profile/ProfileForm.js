import AuthContext from '../store/auth-context';
import classes from './ProfileForm.module.css';
import {useRef,useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
const ProfileForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const passwordInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredPassword = passwordInputRef.current.value;
   
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBFjPtZRv42asMyN8Ts4xm18_mYVEaJACA';
     
    fetch(
      url,{
        method:'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((response)=>{
      history.replace('/auth');
        console.log(response);
    })
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' minLength='6' id='new-password' ref= {passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
