import React from 'react'
import Headline from './Headline'
import CategorySlider from './CategorySlider'

function Category() {
  return (
    <section id='category' className='bg-slate-200 min-h-[680px] py-16'>
        <div className='container mx-auto h-[680px]'>
            <Headline title="Category"/>
            <CategorySlider />
        </div>
    </section>
  )
}

export default Category