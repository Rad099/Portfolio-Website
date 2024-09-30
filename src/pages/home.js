import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

function Home() {
    useEffect(() => {
      AOS.init({ duration: 1200 });
    }, []);
    
    // TODO: Add images
    return (
        <section className='home'>
            <h1 data-aos="fade-up">Hi, i'm Ridwan Alrefai</h1>
            <p data-aos="fade-right">Welcome to my portfolio</p>
            
        </section>
    )

}

export default Home;

