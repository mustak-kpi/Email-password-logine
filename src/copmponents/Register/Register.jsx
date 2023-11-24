import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import app from '../../Friebase/Friebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app)

const Register = () => {
    const [regerror , setRegerror] = useState('')
    const [sucesse, setSucess] = useState('')
    const emailRef = useRef()
    // console.log(email)

    const TypeEmailChaingAccount = (event) =>{
        // console.log(event.target.value)
        // setEmail(event.target.value)
    }

    const typeemailBlur = (event) => {
        // console.log(event.target.value)
    }
    

    const onsubmitthefrom =(event) =>{
        
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        console.log(email, password, name)
        setSucess('')
        if(!/(?=.*[0-9])/.test(password)){
            setRegerror('plaese add numere ane set password')
            return
        }
        else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)){
            setRegerror('plaese add the 2 uppercase and logien accounts')
            return
        }
        else if(!/(?=.*[@#$%])/.test(password)){
            setRegerror('plaess set the validection ')
            return
        }
        else if(password.length < 8){
            setRegerror('pleses add to manimam 8 cahpler')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const logineuser = result.user;
            console.log(logineuser)
            event.target.reset()
            setRegerror('')
            setSucess('email account register in sucessfull')
            sendveriefecationemail(result.user)
            updateprofileemail(result.user, name)
        })
        .catch(error =>{
            console.log(error.message)
            setRegerror(error.message)
        })
      const sendveriefecationemail = (user)=>{
        sendEmailVerification(user)
        .then(result =>{
            alert('please your email varify address')
            console.log(result)
        })
        
      }

      
    }
    const hendelereset = event =>{
        const email = emailRef.current.value;
        if(!email){
            alert('please add to emaile accounts')
        }
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert('please chacek add to email')
        })
        .catch(error =>{
            console.log(error)
            setRegerror(error.message)
        })
    }

    const updateprofileemail = ( user, name) =>{
        updateProfile(user, {
            displayName: name
        })
        .then( () =>{
            console.log('name update dispaly name')
        })

        .catch (error =>{
           setRegerror(error.message)
        })
    }
 
    return (
        <div>
            <h1 className='text-primary'>plesce Register anthers accounts</h1>
            <form onSubmit={onsubmitthefrom}>
                <input className='w-50 mb-4 rounded ps-2'  required type="text" name="Name" id="name" placeholder='email Name' ref={emailRef} />
                <br/>
                <input className='w-50 mb-4 rounded ps-2' onChange={TypeEmailChaingAccount} required type="email" name="email" id="" placeholder='email caaounts' ref={emailRef} />
                <br />
                <input className='w-50 mb-4 rounded ps-2' onBlur={typeemailBlur} required type="password" name='password' id='password' placeholder='email password' />
                <br />
                <input className='btn btn-primary'  type="submit" value='register' />
                <p><span>logine your gmail<Link to="/logine">login</Link></span></p>
                <p><small>please reset password <button onClick={hendelereset} className='btn btn-link'>reset password</button> </small></p>
                <p className='text-primary'>{regerror}</p>
                <p className='text-success'>{sucesse}</p>
             </form>
        </div>
    );
};

export default Register;