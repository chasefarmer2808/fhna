import React from 'react'
import { RichText } from 'prismic-reactjs'

const NavButton = ({ slice }) => (
  <>
    <button>
      {
        slice.primary.label ?
        <RichText render={slice.primary.label} />
        : <a>Template slice, update me!</a>
      }
    </button>
    <style jsx>{``}</style>
  </>
)

export default NavButton