import React from 'react'
import instagram from './Images/instagram-footer.png'
import linkedin from './Images/linkedin-footer.png'
import github from './Images/github-footer.png'
function Footer() {
  return (
    <div className='text-white flex justify-center items-center bg-[#343434] h-[40vh] w-[100%] py-16'>
      <footer className="row footer">
        <div className="col flex flex-col items-center text-center gap-3">
          <p>"Made by Kartik Mishra"</p>
          <div className="links flex gap-3">
            <a className="instagram-footer invert w-8" href="https://www.instagram.com/kartikk26_"
              rel="noreferrer" target="_blank"><img src={instagram} alt="instagram" /></a>
            <a className="linkedin-footer w-8" href="https://www.linkedin.com/in/kartikmishra2004"
              rel="noreferrer" target="_blank"><img src={linkedin} alt="linkedin" /></a>
            <a className="github-footer invert w-8" href="https://github.com/kartikmishra2004"
              rel="noreferrer" target="_blank"><img src={github} alt="github" /></a>
          </div>
          <p>&copy; 2024 Plate Pages. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
export default Footer