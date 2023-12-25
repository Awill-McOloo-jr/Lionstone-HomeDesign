import React from 'react'
import Headline from './Headline'
import Card from './Card'

function Product() {
  return (
    <section id="product" className='max-w-[1640px] mx-auto p-4 py-16'>
        <Headline title='Products'/>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-16'>
            <Card image="/assets/image1.jpg" title="Living Room 1"/>
            <Card image="/assets/image2.jpeg" title="Living Room 2"/>
            <Card image="/assets/image3.jpg" title="Living Room 3"/>
            <Card image="/assets/image4.jpg" title="Living Room 4"/>
            <Card image="/assets/image5.jpg" title="Living Room 5"/>
            <Card image="/assets/image6.jpg" title="Living Room 6"/>
        </div>
    </section>
  )
}

export default Product