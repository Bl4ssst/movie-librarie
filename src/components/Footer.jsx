import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaFireAlt, FaFilm, FaSearch } from "react-icons/fa";

const Footer = () => {
  return (
      <div className="container-footer">
        <div className="row">
            <div className="cfooter">
                  <NavLink to="/trending">
                    <button className="botao">
                      <FaFireAlt />
                      <h5 className="pt-1 fs-6">Bombando Hoje</h5>
                    </button>
                  </NavLink>
          
                  <NavLink to="/">
                    <button className="botao">
                      <FaFilm />
                      <h5 className="pt-1 fs-6">Melhores Filmes</h5>
                    </button>
                  </NavLink>
            </div>
            <p>Por Igor Moreira</p>
        </div>
      </div>
  );
};

export default Footer;