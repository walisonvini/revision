import React from 'react';
import * as MdIcons from "react-icons/md"
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Materias',
    path: '/app/subjects',
    icon: <MdIcons.MdSubject />
  },
  {
    title: 'Calendario',
    path: '/app/calendar',
    icon: <MdIcons.MdCalendarToday />
    
  },
  {
    title: 'Configurações',
    path: '/app/settings',
    icon: <IoIcons.IoIosSettings />
    
  },
];
