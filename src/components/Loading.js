import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Loading() {
  return (
    <div className={'col-12 text-center mt-5'}>
      <div className="spinner-border" style={{ width: '4rem', height: '4rem' }} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
