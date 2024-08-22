import React from 'react'
import Navbars from './Navbar'
import Drawer from './Drawer'
import Welcompage from '../pages/Welcomepage'

function Dashboard() {
  const color ="#FCD34D"
  return (
   
    <div>
    <Navbars/>
    <div>
    <Drawer data={color}/>
    <Welcompage/>
    </div>
   
    </div>
  )
}

export default Dashboard