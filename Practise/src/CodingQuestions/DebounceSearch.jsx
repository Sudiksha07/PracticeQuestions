import { useEffect, useState } from 'react'

function DebounceSearch() {
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  const users = [
    'Aman',
    'Ankit',
    'Ravi',
    'Rahul',
    'Priya',
    'Pooja',
    'Suresh',
    'Shivam',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 1000)

    return () => clearTimeout(timer)
  }, [search])

  const filteredUsers = users.filter((item) =>
    item.toLowerCase().includes(debouncedSearch.toLowerCase())
  )

  return (
    <>
      <h1>Debounce Search</h1>
      <div>
        <input
          type='input'
          placeholder='Enter Search Value'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <h4>
        Search Value :
        {filteredUsers.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </h4>
    </>
  )
}

export default DebounceSearch
