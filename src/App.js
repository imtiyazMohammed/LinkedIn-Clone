import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets.js'
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }else{
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">

      <Header />

      {!user ? (
        <Login />
      )
        :
        (

          <div className="app__body">

            <Sidebar />

            <Feed />

            {/* Widgets */}
            <Widgets/>
          </div>
        )}


    </div>
  );
}

export default App;
