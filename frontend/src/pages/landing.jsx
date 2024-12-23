import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Meetly</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div className='landingMain'>
                    <h1><span style={{ color: "#E73879" }}>Meetly</span></h1>

                    <div role='button'>
                        <Link to={"/auth"} variant="body2">Join Meetly</Link>
                    </div>
                </div>
                <div>


                </div>
            </div>



        </div>
    )
}
