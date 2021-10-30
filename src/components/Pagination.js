import React from 'react';
import { Pagination } from 'react-bootstrap';

// const Pagination = ({productsPerPage, totalProducts}) => {
//     const pageNumbers = [];

//     for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <nav>
//             <ul className="pagination">
//                 {pageNumbers.map(number => {
//                     <li key={number} className="page-item">
//                         <a href="!#" className="page-link">{ number }</a>
//                     </li>
//                 })}
//             </ul>
//         </nav>
//     )
// }

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const paginationBasic = (
  <div>
    <Pagination>{items}</Pagination>
    <br />

    <Pagination size="lg">{items}</Pagination>
    <br />

    <Pagination size="sm">{items}</Pagination>
  </div>
);

export default paginationBasic
