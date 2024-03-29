import React from 'react'
import { useEffect } from 'react';
import './HomeStyles.css'
function Home() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    
      return (
        <div>
          <h2></h2>
    
          <div style={{height: '155rem'}} />
    
          {/* 👇️ scroll to top on button click */}
          <button
            onClick={() => {
              window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}
            style={{
              position: 'fixed',
              padding: '1rem 2rem',
              fontSize: '20px',
              bottom: '40px',
              right: '40px',
              backgroundColor: '#0C9',
              color: '#fff',
              textAlign: 'center',
              zIndex:100
            }}
          >
            Scroll to top
          </button>
        </div>
  )
}

export default Home
