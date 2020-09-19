import React from 'react';
import PageSize from './PageSize';
import { Pagination, Dropdown } from "react-bootstrap";
const PaginationBar= ({musicPerPage, totalMusics, setPageNumber, paginate, currentPage}) => {
    const pageNumbers = [];

    for (let i=1; i<=Math.ceil(totalMusics / musicPerPage); i++){
        pageNumbers.push(
            <Pagination.Item
                key={i}
                onClick={() => paginate(i)}
                active={i === currentPage}
            >
            {i}
            </Pagination.Item>
        )
    }
    return (
        <div className="row">
        <div className="col-md-9">
        <div className="d-flex justify-content-between">
        <Pagination>{pageNumbers}</Pagination>
        <PageSize setPageNumber={setPageNumber} paginate={paginate} />
        </div>
        </div>
        </div>
    )
}

export default PaginationBar;