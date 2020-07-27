import React from 'react'
import { pagination } from 'react-reactstrap-pagination';

const Pagination = ({ postsPerPage, totalPosts ,paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='!#' class='page-link'>
                        
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
            
        </nav>
    )
}

export default Pagination