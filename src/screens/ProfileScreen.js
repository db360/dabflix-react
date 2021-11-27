import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import './ProfileScreen.css'
import { useNavigate } from 'react-router-dom'

const ProfileScreen = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    const handleLogout = () => {
        auth.signOut()
        navigate('/');
    }
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="avatar" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans (Current Plan: Premium)</h3>
                            
                            <button onClick={()=>handleLogout() } className="profileScreen__signout">Sign Out</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProfileScreen
