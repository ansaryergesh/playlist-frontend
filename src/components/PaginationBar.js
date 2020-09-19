import React from 'react';
import PageSize from './PageSize';
const PaginationBar= ({musicPerPage, totalMusics, setPageNumber, paginate, currentPage}) => {
    const pageNumbers = [];

    for (let i=1; i<=Math.ceil(totalMusics / musicPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div className="row">
        <div className="col-md-9">
        <div className="d-flex justify-content-between">
        <div className>
            <ul className="pagination">
                {pageNumbers.map(number=>(
                    <li active={number === currentPage} key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <PageSize setPageNumber={setPageNumber} paginate={paginate} />
        </div>
        </div>
        </div>
    )
}

export default PaginationBar;