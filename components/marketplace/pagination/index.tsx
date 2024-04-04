import IonIcon from "@reacticons/ionicons";
import React from "react";

const Pagination = ({ setCurrentPage, currentPage, postPerPage, postData }) => {
    const renderPages = [];
    for(var i=0;i<=(postData.length / postPerPage); i++) renderPages.push({});
  //on clicking next
  const nextHandle = () => {
    currentPage < postData.length / postPerPage &&
      setCurrentPage((page) => page + 1);
  };

  //on clicking previous
  const previousHandle = () => {
    currentPage > 1 && setCurrentPage((page) => page - 1);
  };

  //on clicking page number
  const clickPageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="responsiveNavMarketplace" style={{marginTop: '1rem', display: 'flex', justifyContent: 'space-between'}}>
      <p style={{padding: '.5rem', cursor: 'pointer'}} onClick={previousHandle}><IonIcon name="arrow-back-outline"/></p>
      {postData.length > 0 &&
        renderPages.map((_, index) => (
          <p
            style={{cursor: 'pointer', padding: '.5rem'}}
            className={currentPage === index + 1 && "active_pagenumber"}
            key={index}
            onClick={() => clickPageNumber(index + 1)}
          >
            {index + 1}
          </p>
        ))}
      <p style={{padding: '.5rem', cursor: 'pointer'}} onClick={nextHandle}><IonIcon name="arrow-forward-outline"/></p>
    </div>
  );
};

export default Pagination;