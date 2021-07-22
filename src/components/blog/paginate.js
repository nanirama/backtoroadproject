import React from 'react'
import * as styles from "./blog.module.css"
import { Link } from "gatsby"

const Paginate = props => {
const currentPage  = props.currentPage
const numPages  = props.numPages
const path = props.path

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage =
    currentPage - 1 === 1 ? `/${path}/` : `/${path}/${currentPage - 1}`
  const nextPage = `/${path}/${currentPage + 1}`
  const firstPage = `/${path}/`
  const lastPage = `/${path}/${numPages}`

  console.log('From Pagination Page ',numPages)
  console.log('From Pagination Page ',currentPage)
    return (
        <section className={styles.links}>
        {!isFirst && (
            <Link to={firstPage} className={styles.link}>
              First
            </Link>
          )}
          {!isFirst && (
            <Link to={prevPage} className={styles.link}>
              Prev
            </Link>
          )}

          {Array.from({ length: numPages }, (_, i) => {
            return (
              <Link
                key={i}
                fade
                to={`/${path}/${i === 0 ? "" : i + 1}`}
                className={
                  i + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </Link>
            )
          })}
          {!isLast && (
            <Link to={nextPage} className={styles.link}>
              Next
            </Link>
          )}
          {!isLast && (
            <Link to={lastPage} className={styles.link}>
              Last
            </Link>
          )}
        </section>
    )
}

export default Paginate