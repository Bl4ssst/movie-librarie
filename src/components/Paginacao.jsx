import React from "react";
import "./Paginacao.css";

const Paginacao = ({page, setPage}) => {

  const Previous = () => {
    if (page !== 1) {
      setPage(page - 1);
    } else {
      setPage(page);
    }
  };

  const Next = () => {
    if (page < 10) {
      setPage(page + 1);
    }
  };

  return (
    
      <div className="paginacao-container">
        <button onClick={Previous}>
          Anterior
        </button>
        <button onClick={Next}>
          Próximo
        </button>
      </div>
    
  );
};

export default Paginacao;