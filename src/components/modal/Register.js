import { faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../../styles/Button.style'
import { Input } from '../../styles/Input.style'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CircularProgress } from '@mui/material';

export default function Register() {
  const [loading, setLoading] = useState(false); 
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const PHONE_REGEX = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const EMAIL_REGEX = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [fullname, setFullname] = useState('');
  const [validFullname, setValidFullname] = useState(false);
  const [fullnameFocus, setFullnameFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [phone, setPhone] = useState('');
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [Success, setSuccess] = useState(false);
  
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])
    
    useEffect(() => {
      setValidFullname(fullname);
    }, [fullname])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
      setValidPhone(PHONE_REGEX.test(phone));
    }, [phone])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd, phone])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    const { username, fullname, email, password, tel } = e.target;
    try {
      const data = { username: username.value, fullname: fullname.value, email: email.value, password: password.value, tel: tel.value };
      await axios.post('http://localhost:3001/register', data);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true)
        }, 2000);
    } catch (err) {
        errRef.current.focus();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }
  }

  return (
    <>
        { Success ? (
            <div className='text-center'>
                <h1>Success!</h1>
                <div className='m-3'>Your account has been created!</div>
                <CheckCircleIcon sx={{fontSize: "100px", color: "#34b233"}}/>
                <br />
                <Button sty="link" style={{fontSize: "22px"}} onClick={() => document.getElementById('login_button').click()}>Log In</Button>
            </div>
            ) : (
                <div className="text-center">
                <h2>Join UTrade</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <Input
                        ref={userRef}
                        className="mb-2"
                        type="text"
                        name="username"
                        sty="modal"
                        onChange={(e) => setUser(e.target.value)}
                        placeholder="Choose a Username" 
                        autoComplete='off'
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        required
                        />
                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                    <p className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters.<br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>
                    <br />
                    <Input
                        className="mb-2"
                        type="text"
                        name="fullname"
                        sty="modal"
                        onChange={(e) => setFullname(e.target.value)}
                        placeholder="What's your preferred name?" 
                        autoComplete='off'
                        onFocus={() => setFullnameFocus(true)}
                        onBlur={() => setFullnameFocus(false)}
                        required
                        />
                    <FontAwesomeIcon icon={faCheck} className={validFullname ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validFullname || !fullname ? "hide" : "invalid"} />
                    <p className={fullnameFocus && fullname && !validFullname ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters.<br />
                        Must begin with a letter.<br />
                    </p>
                    <br />
                    <Input
                        className="mb-2"
                        type="email"
                        name="email"
                        sty="modal"
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setValidEmail(EMAIL_REGEX.test(email))
                        }}
                        placeholder="Enter your email"
                        autoComplete='off'
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        required
                        />
                    <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                    <p className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Enter a valid email<br />
                    </p>
                    <br />
                    <Input
                        className="mb-2"
                        type="password" 
                        name="password"
                        sty="modal"
                        onChange={(e) => setPwd(e.target.value)}
                        placeholder="Choose a Password"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                        required
                    />
                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                    <p className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>
                    <br />
                    <Input
                        className="mb-2"
                        type="password"
                        name="password2"
                        sty="modal"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        placeholder="Re-type your password"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                        required
                    />
                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                    <p className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must match the first password input field.
                    </p>
                    <br />
                    <Input
                        className="mb-3"
                        type="tel"
                        name='tel'
                        sty="modal"
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number" 
                        autoComplete="off"
                        onFocus={() => setPhoneFocus(true)}
                        onBlur={() => setPhoneFocus(false)}
                        required
                    />
                    <FontAwesomeIcon icon={faCheck} className={validPhone ? "valid" : "hide"} />
                    <p className={phoneFocus && phone && !validPhone ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Enter Phone number in proper format<br />
                        +Country Code (###) ### #### <br />
                    </p>
                    <br />
                    <div className='ms-2 mb-3 text-start'>
                        <input type="checkbox" name="remember"/>
                        <label className='ms-1'>
                            I agree the terms of use
                        </label>
                    </div>
                    <Button color="white" sty="modal" disabled={!validName || !validPwd || !validMatch || !validPhone ? true : false}>{loading ? <CircularProgress color="grey" size={30}/> : 'Join'}</Button> 
                    <br /><br />
                </form>
                <hr />
                <div className='pointer mt-2 text-primary' onClick={() => document.getElementById('login_button').click()}>Already have an account?</div>
            </div>
        )}
    </>
)}
