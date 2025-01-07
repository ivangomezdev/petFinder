import React, { useState } from "react";
import "./listItems.css";
import { NavLink } from "react-router-dom";

type ListItemProps = {
  items: any[];
};

const NavLinks = ({ items }: ListItemProps) => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para manejar el menú hamburguesa

  const toggleMenu = () => setMenuOpen(!menuOpen); // Alterna el estado del menú

  return (
    <>
      {/* Botón del menú hamburguesa */}
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Puedes reemplazar esto con un ícono de tu preferencia */}
      </div>

      {/* Lista de navegación */}
      <nav className={`listItems__list ${menuOpen ? "active" : ""}`}>
        {items.map((i) => (
          <NavLink
            key={i.name}
            className="listItems__navLink"
            to={i.to}
            onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic en un enlace
          >
            {i.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default NavLinks;