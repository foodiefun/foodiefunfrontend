import React from 'react'

function NavBottom() {
  return (
    <div style={navb}>
      <i className="fas fa-home"></i>
      <i className="fas fa-plus-circle"></i>
      <i className="far fa-edit"></i>
      <i className="fas fa-sign-out-alt"></i>
    </div>
  )
}

export default NavBottom

const navb = {
  width: '100%',
  fontSize: '4rem',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#F1F3D7',
  textShadow: ''
}