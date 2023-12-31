import React from 'react';
import {
  BsFillFolderFill,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsPeopleFill,
  BsCurrencyDollar,
  BsMenuButtonWideFill,
  BsFillInfoCircleFill,
  BsFillFilePersonFill,
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsFillFolderFill className='icon_header' /> Dashboard
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/some-link">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/some-link">
            <BsFillArchiveFill className='icon' /> Products
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/some-link">
            <BsPeopleFill className='icon' /> Customers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/some-link">
            <BsCurrencyDollar className='icon' /> Income
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/some-link">
            <BsMenuButtonWideFill className='icon' /> Promote
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/some-link">
            <BsFillInfoCircleFill className='icon' /> Help
          </a>
        </li>
      </ul>
      <li className='sidebar-list-item'>
          <a href="/some-link">
            <BsFillFilePersonFill className='icon' /> Evano(Project Manager)
          </a>
        </li>
      

    </aside>
  );
}

export default Sidebar;
