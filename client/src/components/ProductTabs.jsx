import React from 'react'
import { useState } from 'react'
import Reviewcard from './Reviewcard';
import TopSelling from './TopSelling'

const ProductTabs = () => {
    const tabs = [
        {label:"Product Details" , value:"details"},
        {label:"Rating & Reviews" , value:"reviews"},
        {label:"FAQs" , value:"FAQs"}
    ];

    const reviews = [1,2,3,4,5,6,7,8,9,10,11,12];

    const latestreviews = reviews.slice(-6)

    const [SelectedTab , SetSelectedTab] = useState("details")
  return (
    <div>
    <div className='flex justify-between border-b-2 border-gray-300 md:px-20 lg:px-50'>
        {tabs.map((tab) => (
        <button
        key={tab.value}
        onClick={() => SetSelectedTab(tab.value)}
        className={`px-2 py-4 border-b-2 transition
            ${SelectedTab === tab.value
                 ? "border-blue-500 text-blue-600 font-semibold" : "border-transparent text-gray-500 hover:text-blue-600"}`}
        >{tab.label}</button>))}
    </div>

    { SelectedTab === "details" && (<div>details page</div>)}
    { SelectedTab === "reviews" && (
        <div className='px-4 py-4'>
            <div>
            <h1 className='text-xl font-semibold '>All Reviews <span className='text-sm font-light text-gray-400'>({reviews.length})</span></h1>
            </div>
            <div className='hidden md:block'>
            <div className='flex flex-wrap justify-center'>
                {latestreviews.map((review) => (<Reviewcard/>))}    
            </div>
            </div>
            <div className='block md:hidden'>
            <div className='flex flex-wrap justify-center'>
                {latestreviews.slice(-2).map((review) => (<Reviewcard/>))}    
            </div>
            </div>
        </div>
        )}
    { SelectedTab === "FAQs" && (<div>FAQs</div>)}
    
    </div>
  )
}

export default ProductTabs