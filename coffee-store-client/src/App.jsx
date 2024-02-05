
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      <h1 className='text-teal-600 text-5xl text-center font-bold my-10'>Coffee Shop</h1>
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
