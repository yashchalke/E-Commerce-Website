import { FilterIcon } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const Filter = ({setFilters}) => {
const [localFilters,setLocalFilters] = useState({
    category:[],
    size:[],
    colors:[],
    price:[]
})
const colorMap = {
  black: 'bg-black',
  white: 'bg-white',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
  pink: 'bg-pink-500',
}

const handleCheckbox = (type, value) => {
    setLocalFilters((prev) => {
      const updated = prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value]
      return { ...prev, [type]: updated }
    })
  }

  const applyFilters = () => {
    setFilters(localFilters)
  }

  return (
    <div className='border min-w-70'>
        <div className='flex justify-between px-4 py-4 border-b-2'>
        <h1 className='text-xl font-semibold'>Filters</h1>
        <FilterIcon />
      </div>
      <h1 className='pl-4 mt-2 font-semibold'>Category</h1>
      <div className='flex flex-col px-4 py-4 mb-2 text-gray-500 border-b-2 gap-y-2'>
        {['shirts', 't-shirts', 'jeans', 'shorts'].map((cat)=> (
            <label key={cat} className='flex items-center gap-2'>
                <input type='checkbox' 
                onChange={()=> handleCheckbox('category',cat)}
                value={cat}
                />
                {cat}
            </label>
        ))} 
      </div>
      <div className='flex flex-col px-4 py-4 text-gray-500 border-b-2 gap-y-2'>
        <h1 className='font-semibold text-black'>Size</h1>
        {['small', 'medium', 'large', 'x-large'].map((size) => (
          <label key={size} className='flex gap-2'>
            <input type="checkbox" 
            onChange={() => handleCheckbox('size', size)} 
            />
            {size}
          </label>
        ))}
      </div>
      <div className='px-4 py-4 text-gray-500 border-b-2'>
  <h1 className='mb-2 font-semibold text-black'>Colors</h1>
  <div className='grid grid-cols-4 gap-4'>
    {Object.keys(colorMap).map((color) => (
      <label key={color} className='cursor-pointer'>
        <input
          type='checkbox'
          value={color}
          onChange={() => handleCheckbox('colors', color)}
          className='hidden peer'
        />
        <div className={`border w-10 h-10 rounded-full ${colorMap[color]} peer-checked:ring-4 peer-checked:ring-offset-2 peer-checked:ring-gray-600`}></div>
      </label>
    ))}
  </div>
</div>
      <div className='flex flex-col px-4 py-4 text-gray-500 border-b-2 gap-y-2'>
        <h1 className='mt-2 font-semibold text-black'>Price Range</h1>
        {['under-500', '500-2000', '2000-5000', 'above-5000'].map((range) => (
          <label key={range} className='flex items-center gap-2'>
            <input type="checkbox" onChange={() => handleCheckbox('price', range)} />
            {range.replace('-', ' to ₹')}
          </label>
        ))}
      </div>
      <div className='px-4 py-4'>
       <button
        type="button"
        onClick={applyFilters}
        className='w-full p-2 mt-2 text-white bg-black border cursor-pointer rounded-3xl hover:bg-white hover:text-black hover:font-semibold'
      >
        Apply Filter
      </button>
      </div>
      </div>
    
  )
}

export default Filter