import React from 'react'
import { Link } from 'react-router-dom'
import "./sessionUid.css"
import { useRecoilState } from 'recoil';
import { token } from '../atom/Atom';

interface UserSession {
  username:string;
  closeSes:boolean
}


const SessionUid = (userSession:UserSession) => {
  const [session,setSession] = useRecoilState(token)
  const closeSession = () => {
  setSession("")
  }
  return (
    <div  className={"sessionUid__cont"}>
      <p>
        {userSession.username}
      </p>
      {userSession.closeSes == true && 
      <Link to="/" onClick={closeSession}  style={{color:"blue"}}>Cerrar sesión</Link>}
    </div>
  )
}

export default SessionUid
