import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import React, { useState } from 'react';

import styles from "./style.module.scss"

export function Sidebar() {
    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className={styles.navbar}>
            <a className={styles.menu_bars}>
              <FaIcons.FaBars onClick={showSidebar} />
            </a>
          </div>
          <nav className={sidebar ? `${styles.nav_menu} ${styles.active}` : `${styles.nav_menu}`}>
            <ul className={styles.nav_menu_items}>
              <li className={styles.navbar_toggle}>
                <a className={styles.menu_bars} onClick={showSidebar}>
                  <AiIcons.AiOutlineClose />
                </a>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={styles.nav_text}>
                    <a href={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    )
}

