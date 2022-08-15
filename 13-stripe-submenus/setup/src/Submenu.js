import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {isSubmenuOpen} = useGlobalContext()
  return <aside
    className={`${isSubmenuOpen ? 'submenu show' : 'submenu' }`}
  >
    <section>
      <h4>Submenu</h4>
    </section>
  </aside>
}

export default Submenu
