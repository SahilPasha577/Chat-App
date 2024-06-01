import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, firestore } from './firebase';
import "./style.css"

export const Chat = (props) => {

    const { room, signout } = props;

    const messageRef = collection(firestore, "new");

    const [message, setMessage] = useState("");
    const [newMessage, setNewMessage] = useState([]);

    useEffect(() => {

        const queryMessage = query(messageRef, where("room", "==", room), orderBy("createdAt"));
        const unsubscribe = onSnapshot(queryMessage, (snapshot) => {

            let array = [];
            snapshot.forEach((doc) => {
                array.push({ ...doc.data(), id: doc.id })
            })

            setNewMessage(array);
        })

        return () => unsubscribe();

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) {
            console.log("Message cannot be empty")
            // alert("Message cannot be empty");
        }

        else {

            await addDoc(messageRef, {
                text: message,
                user: auth?.currentUser?.displayName,
                createdAt: serverTimestamp(),
                room: room,
            })

        }

        setMessage("");
    }

    return (
        <>
            <div className='all'>
                <span>
                    <h1 className='text-light text-center py-4'>Welcome to {room.toUpperCase()}</h1>
                    {/* <button className='btn btn-danger d-flex justify-content-end' onClick={signout}>Sign Out</button> */}
                </span>
                <div className='py-4 px-4 d-flex justify-content-start'>
                    <button className='btn btn-danger ' onClick={signout}>Sign Out</button>
                </div>
                <form onSubmit={handleSubmit}>




                    <div className="cont container col-8 border border-success p-4 rounded por">
                        <div>
                            {newMessage.map((message) => (
                                <div
                                    className={`container d-flex flex-row ${message.user !== auth?.currentUser?.displayName
                                        ? "justify-content-start"
                                        : "justify-content-end"
                                        }`}
                                    key={message.id}
                                >
                                    {message.user === auth?.currentUser?.displayName && (
                                        <div className="container d-flex flex-row">
                                            <img
                                                // value={pic}
                                                style={{ height: "25px" }}
                                                className="rounded-circle m-2"
                                                src={auth?.currentUser?.photoURL}
                                                alt="Profile"
                                            />
                                            <div className='curr p-2 rounded my-2'>
                                                <span>
                                                    <b className='text-light'>{message.user} </b>
                                                </span>
                                                <div className='text-light' style={{ display: "block" }}>{message.text}</div>
                                            </div>
                                        </div>
                                    )}

                                    {message.user !== auth?.currentUser?.displayName && (
                                        <div className=" container d-flex flex-row-reverse">
                                            {/* <img
                                        
                                            style={{ height: "20px" }}
                                            className="rounded-circle"
                                            src={auth?.currentUser?.photoURL}
                                            alt="Profile"
                                        /> */}
                                            <div className='curr2 p-2 rounded my-2'>
                                                <span>
                                                    <b>{message.user} </b>
                                                </span>
                                                <div style={{ display: "block" }}>{message.text}</div>
                                            </div>
                                        </div>
                                    )}
                                    {/* <div className="container d-flex flex-row" key={message}>
                                    <span>
                                        <b>{message.user}: </b>
                                    </span>
                                    {message.text}
                                </div> */}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='container lab d-flex'>
                        <input className='container in-form' type='text' placeholder='Type message here...' value={message} onChange={(e) => setMessage(e.target.value)}></input>
                        <button className='butn'>Send</button>
                    </div>

                </form>
                <div className='py-4'>

                </div>

                {/* <div className='py-4 px-4'>
                    <button className='btn btn-danger' onClick={signout}>Sign Out</button>
                </div> */}
            </div>
        </>
    )
}
