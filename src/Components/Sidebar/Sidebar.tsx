import React from 'react';
import '@/Components/Sidebar/Sidebar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import logo from '@/assets/icons/logo-spotify.png';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href="#">
            <Image src={logo} alt="logo spotify" width={80} height={24} />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faHome} className="icon" />
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faSearch} className="icon" />
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="library">
        <div className="library__content">
          <button className="library__button">
            <FontAwesomeIcon icon={faBook} className="icon" />
            <span>Sua biblioteca</span>
          </button>
          <FontAwesomeIcon icon={faPlus} className="icon plus-icon" />
        </div>
        <section className="section-playlist">
          <div className="section-playlist__content">
            <span className="text title">Crie sua primeira playlist</span>
            <span className="text subtitle">É fácil, vamos te ajudar.</span>
            <button className="section-playlist__button">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>
        <div className="cookies">
          <a href="#">Cookies</a>
        </div>
        <div className="languages">
          <button className="languages__button">
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
