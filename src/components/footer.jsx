import React from "react"

const Footer = () => {

    return (
        <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Omosehin Kehinde Jude. All rights reserved.</p>
            <div className="mt-2">
                <a href="https://www.linkedin.com/in/omosehin-kehinde-jude-1788b1167" target="_blank" className="text-gray-400 hover:text-white mx-2 cursor-pointer">LinkedIn</a>
                <a href="https://github.com/kenniejudennes08164094891?tab=repositories" target="_blank"  className="text-gray-400 hover:text-white mx-2 cursor-pointer">GitHub</a>
                <a href="https://www.instagram.com/ajeri_jehovah/" target="_blank"  className="text-gray-400 hover:text-white mx-2 cursor-pointer">Instagram</a>
            </div>
        </div>
    )
}

export default Footer;