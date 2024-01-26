import React from 'react'
import '../components/SearchResult.css';

const SearchResult = ({result}) => {
  return (
    <div className='result'>
        <span>Search status:{result.message}</span>
<table>
  <tr>
    <th>Title</th>
    <th>Year</th>
    <th>Rated</th>
    <th>Released</th>
  </tr>
  <tr>
    <td>{result.payload.title}</td>
    <td>{result.payload.year}</td>
    <td>{result.payload.rated}</td>
    <td>{result.payload.released}</td>
  </tr>
  </table>
  <table>
    <tr>
  <th>Language</th>
    <th>Country</th>
    <th>Awards</th>
    <th>Genre</th>
    </tr>
  <tr>
    <td>{result.payload.language}</td>
    <td>{result.payload.country}</td>
    <td>{result.payload.awards}</td>
    <td>{result.payload.genre}</td>
  </tr>
</table>        
    </div>
  )
}

export default SearchResult
