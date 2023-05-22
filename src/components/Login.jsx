import { useEffect, useRef, useState } from 'react'

const Login = () => {
    const userRef = useRef(null)
    const errRef = useRef(null)
    
    const [user, setUser] = useState('')
	const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)
    
    useEffect(() => {
		userRef.current.focus()
	}, [])
    
    useEffect(() => {
		setErrMsg('')
	}, [pwd, user])
    
    

    return (
		<section>
			<p
				ref={errRef}
				className={errMsg ? 'errmsg' : 'offscreen'}
				aria-live='assertive'
			>
				{errMsg}
			</p>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='username'>Username:</label>
				<input
					type='text'
					id='username'
					ref={userRef}
					autoComplete='off'
					onChange={(e) => setUser(e.target.value)}
					value={user}
					required
				/>
				<label htmlFor='password'>Password:</label>
				<input
					type='password'
					id='password'
					onChange={(e) => setPwd(e.target.value)}
					value={pwd}
					required
				/>
				<button>Sign In</button>
				<p>
					Need an account?
					<br />
					<span className='line'>Sign Up</span>
				</p>
			</form>
		</section>
	)
}

export default Login
