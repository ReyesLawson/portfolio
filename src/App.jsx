import React from 'react';
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar }from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Unrelated } from './components/Unrelated/Unrelated';
const App = () => {
  return (
    <div className={styles.App}>
   <Navbar/>
   <Hero/>
   <About/>
   <Experience/>
   <Projects/>
   <Unrelated/>
    </div>
  );
}

export default App;
