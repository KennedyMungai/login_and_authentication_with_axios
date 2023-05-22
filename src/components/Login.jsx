import { useEffect, useRef, useState } from 'react'

const Login = () => {
    const userRef = useRef(null)
    const errRef = useRef(null)
    
    const [user, setUser] = useState('')
	const [pwd, setPwd] = useState('')
	const [errMsg, setErrMsg] = useState('')

	return <div>Login</div>
}

export default Login
