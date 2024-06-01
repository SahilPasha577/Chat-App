import './App.css';
import { Fragment, useRef, useState } from 'react';
import { Auth } from './MyComp/Auth';
import { Navbar } from './MyComp/Navbar';
import Cookies from 'universal-cookie';
import { Chat } from './MyComp/Chat';
import { signOut } from 'firebase/auth';
import { auth } from './MyComp/firebase';
import { About } from './MyComp/About';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './MyComp/Footer';

const cookie = new Cookies();

function App() {

  const [isAuth, setIsAuth] = useState(cookie.get("auth-token"))
  const [room, setRoom] = useState(null);

  const userinputRef = useRef(null);

  const signout = async () => {
    await signOut(auth);
    cookie.remove("auth-token");
    setRoom(null);
    setIsAuth(false);
  }

  if (!isAuth) {
    return (
      <Fragment>
        <Navbar setIsAuth={setIsAuth} />
        <Routes>

          <Route path='/about' element={<About />} />
          <Route path='/' element={<Auth setIsAuth={setIsAuth} />} />


          {/* <Auth setIsAuth={setIsAuth} /> */}

        </Routes>
        <Footer />
      </Fragment>
    );
  }

  return (
    <>
      {/* <div>
        <h1>Chat App</h1>
      </div> */}
      <div>
        {room ? (
          <div>
            <Chat signout={signout} room={room} />
          </div>
        )
          :
          (


            <div className='text-center py-4' style={{ background: "rgb(172, 186, 238)", height: "100vh" }}>
              <h1 className='container text-center my-4 text-light' >Enter Room Number</h1>
              <div className='container'>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder='Enter room no' ref={userinputRef} />
              </div>
              {/* <input type='text' placeholder='Enter room no' ref={userinputRef}></input> */}
              <button className='btn btn-primary my-4' onClick={(e) => setRoom(userinputRef.current.value)}>Enter Room</button>

              <div className='my-4'>
                <button className='btn btn-danger' onClick={signout}>Sign Out</button>
              </div>
            </div>

          )
        }
      </div>

      {/* <div className='my-4'>
        <button onClick={signout}>Sign Out</button>
      </div> */}
    </>


  )
}

export default App;
