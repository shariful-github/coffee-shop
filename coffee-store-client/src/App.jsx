
import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      <h1 className='text-teal-600 text-5xl text-center font-bold my-10'>Coffee Shop</h1>
      <div className='text-right'>
        <Link to={'http://localhost:5173/addcoffee'}>
          <button className="btn btn-info mr-5">Add Coffee</button>
        </Link>
      </div>
      <div className='w-3/4 mx-auto grid grid-cols-2 gap-5 mb-10'>
        {
          coffees.map(coffee =>
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          )
        }
      </div>
    </>
  )
}

export default App
