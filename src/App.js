import React, { useState } from 'react';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './components/Routes'


function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:text-gray-300 min-h-screen" style={{backgroundColor: darkTheme ? '#202124' : ''}}>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Routes />
            <Footer />
      </div>
    </div>
  );
}

export default App;
