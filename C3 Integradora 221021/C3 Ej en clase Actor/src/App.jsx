import React from 'react'
import Header from './components/Header'
import PersonalInformation from './components/PersonalInformation'
import WorkLife from './components/WorkLife'
import Footer from './components/Footer'

const App = () => {
    return (
        <div>
            <Header /> 
            <PersonalInformation/> 
            <WorkLife/>
            <Footer/>
        </div> )
}

export default App
