import React from 'react'
import MainDetection from './MoodDetector'
import PlayListSection from './PlayListSection'
import Navbar from '../../../Components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />  
        <MainDetection />
        <PlayListSection />
    </div>
  )
}

export default Home