import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header_Socials">
        <a href="https://www.linkedin.com/in/pratham-dangol-62b911223/" ><GrLinkedin/></a>
        <a href="https://github.com/dangol429" ><AiOutlineGithub/></a>
        <a href="https://instagram.com/pra.dxng" ><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials