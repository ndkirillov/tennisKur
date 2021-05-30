import React, {useState} from 'react'
import TwoColumnSection from '../components/TwoColumnSection' 
import { homeObj } from '../components/TwoColumnSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import OneColumnSection from '../components/OneColumnSection'
import { aboutObj } from '../components/OneColumnSection/Data'
import ComplexSection from '../components/ComplexSection'
import { trainingObj } from '../components/ComplexSection/Data'
import CoachesSection from '../components/CoachesSection'
import {coachesObj} from '../components/CoachesSection/Data'
import CourtSection from '../components/CourtSection'
import {courtObj} from '../components/CourtSection/Data'
import ContactSection from '../components/ContactSection'
import {contactObj} from '../components/ContactSection/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
          <Sidebar isOpen={isOpen} toggle = {toggle}/>
          <Navbar toggle = {toggle}/> 
          <TwoColumnSection {...homeObj}/>
          <OneColumnSection {...aboutObj}/>
          <ComplexSection {...trainingObj}/>
          <CoachesSection {...coachesObj}/>
          <CourtSection {...courtObj}/>
          <ContactSection {...contactObj}/>
          <Footer />
        </>
    )
}

export default Home
