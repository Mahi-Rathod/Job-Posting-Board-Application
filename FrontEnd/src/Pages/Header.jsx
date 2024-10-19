import React from 'react'
function Header() {
  return (
    <header className="shadow sticky z-50 top-0 w-full flex justify-between px-10 items-center">
        <div className="p-4">
          <span className="text-5xl">Cuvette</span>
        </div>
        <div className="flex justify-between px-10 items-center gap-5 text-xl">
          <a href="#" className="contact-link">Contact</a>
          <div className="user-dropdown">
            <span>Your Name</span>
            <i className="arrow-down"></i>
          </div>
        </div>
      </header>
  )
}

export default Header