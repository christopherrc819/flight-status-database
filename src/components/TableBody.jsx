import { useState, useEffect } from 'react'
import TableRow from './TableRow'
const TableBody = ()=> {
    const [flights, setFlights] = useState(null)

    const getFlights = ()=> {
      const options =  {
        method: 'GET'
      }
      const url = 'http://localhost:8000/flights'

      fetch(url, options)
      .then((response)=> response.json())
      .then((flights)=> setFlights(Object.values(flights.data)))
      .catch(error => console.log(error))
    }
// Object value, removes key from object
    useEffect(()=> getFlights(), [])
    console.log(flights)

    return (
      <tbody>
        {flights?.map((flight, _index)=> (
          <TableRow key={_index} flight={flight} />
        ))}
      </tbody>
    )
  }
  
  export default TableBody