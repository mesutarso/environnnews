import Link from 'next/link'

import css from './pagination.modules.scss'

const Pagination = ({ articlesPerPage, totalArticles }) => {
  
  const pageNumbers = []

  for (let i = 0; i <= Math.ceil(totalArticles / articlesPerPage) ; i++) {

    pageNumbers.push(i)
    
  }
  return (
    <nav className={css.container_pagination}>
      <ul>
        {
          pageNumbers.map(number => {
            return(
              <li key={number}>
                <Link href="!#">
                  <a> {number} </a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}

export default Pagination
