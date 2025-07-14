import React from 'react'

const Reviewcard = () => {
  return (
    <div className='p-5'>
        <div className='w-80 h-50 border rounded-2xl'>
            <div className='px-3 py-3 flex flex-col gap-y-4'>
                <div>rating</div>
                <div>name</div>
                <div>review</div>
            </div>
        </div>
    </div>
  )
}

export default Reviewcard