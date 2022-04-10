import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'
import Intro from './Intro'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Intro/>
      
    
    </div>
  )
}

export default Home
