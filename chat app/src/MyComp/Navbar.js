import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './firebase'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'

const cookie = new Cookies();

export const Navbar = (props) => {

    const { setIsAuth } = props

    const signin = async () => {

        try {
            const result = await signInWithPopup(auth, provider);
            cookie.set("auth-token", result?.user?.refreshToken)
            setIsAuth(true);
        }
        catch (error) {
            console.log(error);
        }

    }
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">ChatApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>


                    </ul>

                    <button className='btn btn-danger' onClick={signin}>Sign In with Google</button>

                </div>
            </div>
        </nav>
    )
}
