import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <section className='nav-logo'>
            <h1 className='nav-header'>E-Commerce</h1>
        </section>
        <section className='nav-options'>
            {/* <span className='btn'>
                <img src="/assets/icons/log.svg"/> 
                <span className='btn-val'>
                    Share Logs
                </span>
            </span> */}
            <span className='btn'>
            <img src="/assets/icons/cart.svg"/>
            <span className='btn-val'>
                    4
                </span>
            </span>
        </section>
    </nav>
  )
}

export default Navbar