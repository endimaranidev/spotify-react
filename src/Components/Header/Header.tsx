"use client"

import Image from "next/image";
import "./Header.css";
import smallLeft from "@/assets/icons/small-left.png";
import smallRight from "@/assets/icons/small-right.png";
import search from "@/assets/icons/search.png";

interface HeaderProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const Header = ({searchTerm, onSearch}: HeaderProps) => {

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value); // Atualiza o estado no page.tsx
  };

  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <Image src={smallLeft} alt="seta esquerda" width={24} height={24} />
        </button>
        <button className="arrow-right">
          <Image
            src={smallRight}
            alt="seta direita"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className="header__search">
        <Image src={search} alt="icone de lupa" width={16} height={16} />
        <input
          id="search-input"
          maxLength={800}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          placeholder="O que você quer ouvir?"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>

    </nav>
  );
};

export default Header;
