import React from "react";
import { NavLink } from "react-router-dom";
import { FaFireAlt, FaFilm } from "react-icons/fa";

const Footer = () => {
  const data = [
    {
      icon: "fas fa-fire-alt",
      name: "Trending",
      link: "/",
      id: 1,
    },
    {
      icon: "fas fa-film",
      name: "Movies",
      link: "/movies",
      id: 2,
    },
    {
      icon: "fas fa-tv",
      name: "TV Series",
      link: "/tv",
      id: 3,
    },
    {
      icon: "fas fa-search",
      name: "Search",
      link: "/search",
      id: 4,
    },
  ];
  
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center bg-dark footer">
                  <NavLink to="">
                    <button className="col-sm-2 col-md-2 btn btn-dark">
                      <FaFireAlt />
                      <br />
                      <h5 className="pt-1 fs-6">Bombando Hoje</h5>
                    </button>
                  </NavLink>
                  <NavLink to="/">
                    <button className="col-sm-2 col-md-2 btn btn-dark">
                      <FaFilm />
                      <br />
                      <h5 className="pt-1 fs-6">Melhores Filmes</h5>
                    </button>
                  </NavLink>
            <div className="text-white footer1">
              Por Igor Moreira
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;