import React from 'react'
import Navbars from '../components/Navbar'
import Drawer from '../components/Drawer'
import ProductHome from '../utils/ProductHome'

function Product() {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbars />

    <div className="flex flex-1">
      <div className="md:flex md:w-64 md:flex-shrink-0">
        <Drawer />
      </div>
      <main className="flex-auto p-4 overflow-y-auto">
        {/* <Subcategoryhome /> */}
        <ProductHome/>
      </main>
    </div>
  </div>

  )
}

export default Product
