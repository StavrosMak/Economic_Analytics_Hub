import React, { useState, createContext } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar';
import Content from './Routes/Content/Content';
import Transaction from './Routes/Transaction/Transaction';
import { Routes, Route } from "react-router-dom";
import './shared/styles.css'


export const ThemeContext = createContext(null);
export const SidebarContext = createContext(null);
 
function App() {
  const [theme, setTheme] = useState("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
        <div className="App" id={theme}>
          <Navbar />
          <div className='content-wrapper'>
            <Sidebar />
            <Routes>
              <Route path='/' element={<Content />} />
              <Route path='/transaction' element={< Transaction />} />
            </Routes>
          </div>
        </div>
      </SidebarContext.Provider>
    </ThemeContext.Provider >
  );
}

export default App;
