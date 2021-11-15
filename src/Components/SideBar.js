import '../Styles/SideBar.css'
import {RiDashboardLine} from 'react-icons/ri'
import {AiOutlineTeam} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineTrophy} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import React, { useState } from 'react';


export default function SideBar(props){
    const { setPage,setHomeLog } = props;


    function Meetings() {
        setPage('Meetings')
      
      }

      function Candiditaes() {
        setPage('Candiditaes')
       

      }

      function Interviewers() {
        setPage('Interviewers')


      }

      function Halls() {
        setPage('Halls')


      }

      function Logout() {
        setHomeLog("Log")
      }

    return(
        <div className="SideBar">
            <button onClick={Meetings} ><RiDashboardLine className="Side_icon"/> Meetings</button>
            <button onClick={Candiditaes} ><AiOutlineTrophy className="Side_icon"/>Candiditaes</button>
            <button onClick={Interviewers}><AiOutlineTeam className="Side_icon"/>Interviewers</button>
            <button onClick={Halls} ><CgProfile className="Side_icon"/>Halls</button>
            <button onClick={Logout}><FiLogOut className="Side_icon"/>Logout</button>
        </div>
    )
}