import React from 'react'
import videoSrc from "../Videos/pro.mp4"
import backgroundImg from "../Videos/3.jpg"
import "./vid.css"
import { Link } from 'react-router-dom'

export const Auth = () => {
    return (
        <>



            <div className='vide'>
                <div className='py-4'></div>
                <div className='content-vid  text-center py-4 text-light'>
                    <h1 className='py-4 pad' style={{ padding: `150px` }}><b>Chat App</b></h1>
                </div>


                <div className='text-center butn-vid'>
                    <button className=' butn-vid1'>   <b>Explore More</b></button>
                </div>



                <video autoPlay loop muted playsInline class="vid">
                    <source src={videoSrc} type="video/mp4" />



                </video>


            </div>

            <h1 className='container my-4'><b>Chat App</b></h1>

            <div className='container'>
                The real-time chat application, developed using React.js and Firebase Firestore, seamlessly integrates Google authentication for users, enabling swift access to chat rooms. Upon authentication, users can select or create a room, where they engage in dynamic conversations with others. Firebase Firestore serves as the backend database, ensuring real-time message synchronization across all participants. With instant message updates and a comprehensive message history feature, users can stay connected and catch up on previous conversations effortlessly. Overall, this application provides a reliable and interactive platform for users to communicate effectively within designated chat rooms.
            </div>

            <div class="container2 my-4">
                <div class="background-image" style={{ backgroundImage: `url(${backgroundImg})` }}></div>
                <div class="content1 py-4 px-4 d-flex justify-content-end ">
                    <h1 className='head1 py-4 px-4'><b className='py-4 px-4'>Join the Chat</b></h1>
                </div>
                <div className='d-flex justify-content-end px-4 para'>

                    <b>

                        Discussing problems can help us to solve <br />
                        them easily and quickly. So,  use   this good    <br />
                        platform to discuss your coding problems<br />
                        to people.

                    </b>

                </div>
            </div>

        </>
    )
}
