import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import app from '../../Friebase/Friebase.config';


const auth = getAuth(app)

const Logine = () => {
  const [seccess , setSeccess] = useState('')
  const [error , setError] = useState('')

    const hendeleRegister = (event) =>{
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)

      setError(' ');

        if(!/(?=.*[a-z])(?=.*[A-Z])/.test(password)){
            setError('plaese set a 2 uppler case')
            return 
        }
        else if(!/(?=.*[0-9])/.test(password)){
            setError('plaess set the onlay nambers ')
            return
        }
        else if(!/(?=.*[@#$%])/.test(password)){
          setError('plaess set the validection ')
          return
      }
     
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const logineuser = result.user;
          console.log(logineuser)
          if(!logineuser.emailVerified){
            setError('plaese variefred your email')
          }
          setSeccess('email logine seccussfuly accounts')
          setError('')
        })

        .catch(error =>{
          console.log(error)
        })


    }
    
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-primary'>hello all fiendes logine accounts</h1>
<form onSubmit={hendeleRegister}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name='email' required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label  for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name='password' required class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <p className="text-danger">{error}</p>
  <p className='text-success'>{seccess}</p>
  <button type="submit" class="btn btn-primary">Logine email</button>
</form>
<p><span>carete new accounts <Link to="/Register">Register</Link></span></p>
        </div>
    );
};

export default Logine;