import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usePagination from './Pagination'
function App() {

    const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

    const { currentData, currentPage, totalPages, goToNextPage, goToPreviousPage, goToPage } = usePagination(items, 5);
  return (
    <div>
      <h1>Pagination</h1>

      <ul>
        {currentData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => goToPage(i + 1)} disabled={currentPage === i + 1}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
