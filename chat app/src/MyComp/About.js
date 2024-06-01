import React from 'react'
import img1 from '../Videos/about.jpg'

export const About = () => {
    return (
        <div className="container text-center my-4">
            <div className="row my-4">
                <div className="col h-100 my-4">
                    <img src={img1} alt="pic" />
                </div>
                <div className="col my-4 text-md-start">
                    <h2 className='my-4'>Chat App</h2>
                    The real-time chat application, developed using React.js and Firebase Firestore, seamlessly integrates Google authentication for users, enabling swift access to chat rooms. Upon authentication, users can select or create a room, where they engage in dynamic conversations with others. Firebase Firestore serves as the backend database, ensuring real-time message synchronization across all participants. With instant message updates and a comprehensive message history feature, users can stay connected and catch up on previous conversations effortlessly. Overall, this application provides a reliable and interactive platform for users to communicate effectively within designated chat rooms.
                </div>
            </div>

        </div>
    )
}
