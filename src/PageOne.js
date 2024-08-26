import React, { useEffect, useRef } from 'react'
import Nav from './Nav'
import htmx from 'htmx.org'

const PageOne = () => {
  const htmxRef = useRef(null)

  useEffect(() => {
    if (htmxRef.current) {
      htmx.process(htmxRef.current);
    }
  }, [])

  return (
    <div ref={htmxRef}>
      <Nav />
      <h1>Page One</h1>

      <div
        hx-get="http://localhost:8080/is-any-in-progress"
        hx-trigger="load"
      />

      <div
        // hx-get="https://test-back-220v.onrender.com/"
        hx-get="http://localhost:8080"
        hx-trigger="load"
        hx-target="#list"
      />


      <div id="list"></div>
    </div>
  )
}

export default PageOne
