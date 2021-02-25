import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
// =====================
// Login.js page
// =====================

// =====================
// Structure
// =====================
// - div (parent)
// 	- div (child)
// 	- div (child)
// 		- div (child of child)
// 		- div (child of child)


// A container div that holds children
// 	- div
// 		- image of src /images/iphone-with-profile.jpg & alt tag of "iPhone with Instagram app"

// 	- div to wrap the following children
// 		- div -> (another div to wrap the form (see below for further details of the form)
// 		- div -> a paragraph with a React router link that allows to the user to navigate to 'Sign up' - use the ROUTES file to link to this particular page

// A form for the user to login with a method of POST

// An input box for the user to enter their email address with a placeholder value of Email Address

// An input box for the user to enter their password with a placeholder value of Password

// A button so that the user can submit the form

// References:
// 	- Tailwind container: https://tailwindcss.com/docs/container
// 	- Tailwind flex: https://tailwindcss.com/docs/flex
export default function Login() {
    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
            </div>
            <div className="flex flex-col w-2/5">
            <div className="flex flex-col items-center bg-white p-4 border mb-4">
                <h1 className="flex justify-center w-full">
                    <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                </h1>
                
                <form method="POST">
                    <input
                        aria-label="Enter your email address"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                        type="text"
                        placeholder="Email address"
                    />
                    <input
                        aria-label="Enter your password"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                        type="password"
                        placeholder="Password"
                    />
                    <button
                        type="submit"
                        className={`bg-blue-500 text-white w-full rounded h-8 font-bold`}
                    >
                        Log In
                    </button>
                </form>
            </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Don't have an account?{' '}
                        <Link to={ROUTES.SIGN_UP} className="font-bold">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}