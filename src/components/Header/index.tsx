import { useState } from 'react';
import style from './style.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Header() {

  const [toggleMenu, setToggleMenu] = useState(true);

  const toggleMode = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <>
      <RxHamburgerMenu className={style.burg} onClick={toggleMode} />
      <nav className={toggleMenu ? style.navContainer : style.navContainerMobile}>
        <h3 ><a href="/">Alka Blog</a></h3>
        <button>Contact us</button>
      </nav>
    </>
  )
}
