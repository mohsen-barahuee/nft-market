"use client"

import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Link from 'next/link'


export default function SignUp() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [userLogin, setUserLogin] = useState(false)

    const creatAccountHandler = async () => {

        if (!username || !email || !password || !confirmPassword) {
            Swal.fire({
                title: "Error!",
                text: "Value is Empty ,Please Try Again",
                icon: "error"
            })
            return false
        }
        else if (password != confirmPassword) {
            Swal.fire({
                title: "Error!",
                text: "Passwords Are Not Same , Please Try Again",
                icon: "error"
            })
            return false
        }
        const user = { username, email, password }
        const respone = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        if (respone.status === 201) {
            Swal.fire({
                title: "User Created Successfully",
                icon: "success"
            })
            setUsername("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            setUserLogin(true)
            document.cookie = "token=aklsgaklsgnkalgnklagnklasgnkl; SameSite=None; Secure";
        }
        else if (respone.status === 422) {
            Swal.fire({
                title: "Error",
                text: "This Username Or Email is Exist",
                icon: "error"
            })
        }
    }
    return (
        <div className=' container flex flex-wrap justify-center w-full gap-x-[60px]'>
            <div className='w-full h-[232px] sm:h-auto sm:w-[397px] lg:w-[610px] '>

                <img src="/img/register/banner.png" alt="" />
            </div>
            <div className=' mt-[100px] mb-[100px]'>
                <div>
                    <h1 className='H2Sans'>
                        {!userLogin ? "Create account" : "Account Created Succefully"}
                    </h1>
                </div>
                {
                    !userLogin && (
                        <div className='mt-5 lg:w-[460px]'>
                            <span className=' font-BodySans text-[22px] leading-[160%] '>Welcome! enter your details and start creating, collecting and selling NFTs.</span>
                        </div>
                    )
                }

                {
                    !userLogin && (
                        <div className='mt-10 flex flex-col gap-y-[15px]'>
                            <div className='flex items-center bg-white w-80 py-3 gap-x-3 pl-5 rounded-full'>
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.125C7.58375 3.125 5.625 5.08375 5.625 7.5C5.625 9.91625 7.58375 11.875 10 11.875C12.4162 11.875 14.375 9.91625 14.375 7.5C14.375 5.08375 12.4162 3.125 10 3.125ZM4.375 7.5C4.375 4.3934 6.8934 1.875 10 1.875C13.1066 1.875 15.625 4.3934 15.625 7.5C15.625 10.6066 13.1066 13.125 10 13.125C6.8934 13.125 4.375 10.6066 4.375 7.5Z" fill="#BDBDBD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 13.124C8.57374 13.124 7.17251 13.4995 5.93728 14.2128C4.70205 14.926 3.67634 15.9518 2.96327 17.1872C2.79071 17.4861 2.40848 17.5886 2.10953 17.416C1.81058 17.2435 1.70812 16.8612 1.88068 16.5623C2.70345 15.1369 3.88696 13.9532 5.31223 13.1303C6.7375 12.3073 8.3543 11.874 10.0001 11.874C11.6459 11.874 13.2627 12.3073 14.688 13.1303C16.1132 13.9532 17.2968 15.1369 18.1195 16.5623C18.2921 16.8612 18.1896 17.2435 17.8907 17.416C17.5917 17.5886 17.2095 17.4861 17.0369 17.1872C16.3239 15.9518 15.2982 14.926 14.0629 14.2128C12.8277 13.4995 11.4265 13.124 10.0001 13.124Z" fill="#BDBDBD" />
                                    </svg>

                                </div>
                                <input type="text" placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)} className=' outline-none bg-inherit text-black' />
                            </div>
                            <div className='flex items-center bg-white w-80 py-3 gap-x-3 pl-5 rounded-full'>
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.875 4.375C1.875 4.02982 2.15482 3.75 2.5 3.75H17.5C17.8452 3.75 18.125 4.02982 18.125 4.375V15C18.125 15.3315 17.9933 15.6495 17.7589 15.8839C17.5245 16.1183 17.2065 16.25 16.875 16.25H3.125C2.79348 16.25 2.47554 16.1183 2.24112 15.8839C2.0067 15.6495 1.875 15.3315 1.875 15V4.375ZM3.125 5V15H16.875V5H3.125Z" fill="#BDBDBD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.03928 3.95268C2.27253 3.69823 2.66788 3.68104 2.92233 3.91428L10 10.4021L17.0777 3.91428C17.3321 3.68104 17.7275 3.69823 17.9607 3.95268C18.194 4.20713 18.1768 4.60248 17.9223 4.83573L10.4223 11.7107C10.1834 11.9298 9.81663 11.9298 9.57768 11.7107L2.07768 4.83573C1.82323 4.60248 1.80604 4.20713 2.03928 3.95268Z" fill="#BDBDBD" />
                                    </svg>

                                </div>
                                <input type="text" placeholder='Email Address' value={email} onChange={(event) => setEmail(event.target.value)} className=' outline-none text-black ' />
                            </div>
                            <div className='flex items-center bg-white w-80 py-3 gap-x-3 pl-5 rounded-full'>
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C9.48223 10 9.0625 10.4197 9.0625 10.9375C9.0625 11.4553 9.48223 11.875 10 11.875C10.5178 11.875 10.9375 11.4553 10.9375 10.9375C10.9375 10.4197 10.5178 10 10 10ZM7.8125 10.9375C7.8125 9.72938 8.79188 8.75 10 8.75C11.2081 8.75 12.1875 9.72938 12.1875 10.9375C12.1875 12.1456 11.2081 13.125 10 13.125C8.79188 13.125 7.8125 12.1456 7.8125 10.9375Z" fill="#BDBDBD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.875C10.3452 11.875 10.625 12.1548 10.625 12.5V14.375C10.625 14.7202 10.3452 15 10 15C9.65482 15 9.375 14.7202 9.375 14.375V12.5C9.375 12.1548 9.65482 11.875 10 11.875Z" fill="#BDBDBD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 7.5C2.5 6.80964 3.05964 6.25 3.75 6.25H16.25C16.9404 6.25 17.5 6.80964 17.5 7.5V16.25C17.5 16.9404 16.9404 17.5 16.25 17.5H3.75C3.05964 17.5 2.5 16.9404 2.5 16.25V7.5ZM16.25 7.5H3.75V16.25H16.25V7.5Z" fill="#BDBDBD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.875C9.41984 1.875 8.86344 2.10547 8.4532 2.5157C8.04297 2.92594 7.8125 3.48234 7.8125 4.0625V6.875C7.8125 7.22018 7.53268 7.5 7.1875 7.5C6.84232 7.5 6.5625 7.22018 6.5625 6.875V4.0625C6.5625 3.15082 6.92466 2.27648 7.56932 1.63182C8.21398 0.987164 9.08832 0.625 10 0.625C10.9117 0.625 11.786 0.987164 12.4307 1.63182C13.0753 2.27648 13.4375 3.15082 13.4375 4.0625V6.875C13.4375 7.22018 13.1577 7.5 12.8125 7.5C12.4673 7.5 12.1875 7.22018 12.1875 6.875V4.0625C12.1875 3.48234 11.957 2.92594 11.5468 2.5157C11.1366 2.10547 10.5802 1.875 10 1.875Z" fill="#BDBDBD" />
                                    </svg>

                                </div>
                                <input type="text" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} className=' outline-none text-black ' />
                            </div>
                            <div className='flex items-center bg-white w-80 py-3 gap-x-3 pl-5 rounded-full'>
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C9.48223 10 9.0625 10.4197 9.0625 10.9375C9.0625 11.4553 9.48223 11.875 10 11.875C10.5178 11.875 10.9375 11.4553 10.9375 10.9375C10.9375 10.4197 10.5178 10 10 10ZM7.8125 10.9375C7.8125 9.72938 8.79188 8.75 10 8.75C11.2081 8.75 12.1875 9.72938 12.1875 10.9375C12.1875 12.1456 11.2081 13.125 10 13.125C8.79188 13.125 7.8125 12.1456 7.8125 10.9375Z" fill="#BDBDBD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.875C10.3452 11.875 10.625 12.1548 10.625 12.5V14.375C10.625 14.7202 10.3452 15 10 15C9.65482 15 9.375 14.7202 9.375 14.375V12.5C9.375 12.1548 9.65482 11.875 10 11.875Z" fill="#BDBDBD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 7.5C2.5 6.80964 3.05964 6.25 3.75 6.25H16.25C16.9404 6.25 17.5 6.80964 17.5 7.5V16.25C17.5 16.9404 16.9404 17.5 16.25 17.5H3.75C3.05964 17.5 2.5 16.9404 2.5 16.25V7.5ZM16.25 7.5H3.75V16.25H16.25V7.5Z" fill="#BDBDBD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.875C9.41984 1.875 8.86344 2.10547 8.4532 2.5157C8.04297 2.92594 7.8125 3.48234 7.8125 4.0625V6.875C7.8125 7.22018 7.53268 7.5 7.1875 7.5C6.84232 7.5 6.5625 7.22018 6.5625 6.875V4.0625C6.5625 3.15082 6.92466 2.27648 7.56932 1.63182C8.21398 0.987164 9.08832 0.625 10 0.625C10.9117 0.625 11.786 0.987164 12.4307 1.63182C13.0753 2.27648 13.4375 3.15082 13.4375 4.0625V6.875C13.4375 7.22018 13.1577 7.5 12.8125 7.5C12.4673 7.5 12.1875 7.22018 12.1875 6.875V4.0625C12.1875 3.48234 11.957 2.92594 11.5468 2.5157C11.1366 2.10547 10.5802 1.875 10 1.875Z" fill="#BDBDBD" />
                                    </svg>

                                </div>
                                <input type="text" placeholder='Confirm Password' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className=' outline-none text-black ' />
                            </div>

                        </div>
                    )
                }

                {
                    !userLogin ?
                        <button onClick={creatAccountHandler} className='w-80 py-3 mt-8 bg-purple rounded-full'>Create account</button>
                        :
                        <a href={'/'}>
                            <button className='w-80 py-3 mt-8 bg-purple rounded-full'>Go Home Page</button>

                        </a>
                }


            </div>
        </div>
    )
}
