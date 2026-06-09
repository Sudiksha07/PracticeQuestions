import { useState } from 'react'

function Pagination() {
  const  items= Array.from({ length: 100 }, (_, i) => `User ${i + 1}`)
  const  itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * itemsPerPage
  const lastIndex = startIndex + itemsPerPage
  const paginatedItems = items.slice(startIndex, lastIndex)
  const totalPages = Math.ceil(items.length / itemsPerPage)
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const handlePagination = (index) => {
    setCurrentPage(index)
  }

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  return (
    <>
      {paginatedItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <div>
        <button onClick={handlePrev}>Prev</button>
        {pages.map((page) => (
          <button
            key={page}
            style={{
              background: currentPage === page ? 'black' : 'white',
              color: currentPage === page ? 'white' : 'black',
            }}
            onClick={() => handlePagination(page)}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default Pagination
