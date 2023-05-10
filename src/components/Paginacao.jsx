import React from "react";

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
    <>
      <div>
        <button onClick={Previous}>
          Previous
        </button>
        <button onClick={Next}>
          Next
        </button>
      </div>
    </>
  );
};

export default Paginacao;