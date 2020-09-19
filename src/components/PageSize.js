import React from 'react';

const PageSize= ({setPageNumber}) => {
    const handleChange = e => {
        setPageNumber(e.target.value)
    }
    const perPageNumbers = [10,20,50,100]
    return (
        <select className="mb-5" name="pages" id="pages" onChange={handleChange}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
        </select>
    )
}

export default PageSize;