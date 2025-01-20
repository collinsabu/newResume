import React from 'react'
   import {FiInstagram} from 'react-icons/fi';
   import {VscGithub} from 'react-icons/vsc';
   import {FiYoutube} from 'react-icons/fi';
   import {FiTwitter} from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
     <a href="https://www.instagram.com/dev_collinsabu/" target="_blank"><FiInstagram/></a>
     <a href="https://twitter.com/dev_collins1" target="_blank"><FiTwitter/></a>
     <a href="https://github.com/collinsabu" target='_blank'><VscGithub/></a>
     <a href="https://www.youtube.com/@CollinsAbu_dev" target="_blank"><FiYoutube/></a>
    </div>
      
  )
}

export default HeaderSocials