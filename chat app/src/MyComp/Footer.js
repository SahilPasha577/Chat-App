import React from 'react'

export const Footer = () => {

    let footerstyle = {
        position: "relative",
        top: "10vh",
        width: "100%"
    }

    return (
        <footer className='bg-dark text-light text-center py-4' style={footerstyle}>
            Copyright &copy; ChatApp.com
        </footer>
    )
}
