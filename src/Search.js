import React from 'react'
import SearchFilter from 'react-filter-search'
const Search = ( {todos,setQuery,query} ) => {
  return (
    <div><input className='searchbar' type="text" placeholder="Search" onChange={e => setQuery(e.target.value)}></input>
        <SearchFilter value={query} data={todos} renderResults = {results=>(
            <div>
            {results.map((todo) => (
                <ul key = {todo.id}>
                    
                    <p>{todo.title}</p>
                    
                    
                </ul>
            )
                
            )}
        </div>
            
        )}></SearchFilter>
    </div>
    
  )
}

export default Search