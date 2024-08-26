import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import htmx from 'htmx.org';

import Nav from './Nav';

const PageTwo = () => {
  const { id } = useParams();
  const htmxRef = useRef(null);

  useEffect(() => {
    if (htmxRef.current) {
      htmx.process(htmxRef.current);
    }
  }, []);

  return (
    <div ref={htmxRef}>
      <Nav />
      <h1>Page Two</h1>
      <h3>{id}</h3>
      <br />
      <br />


      <div
        hx-get={`https://test-back-220v.onrender.com/progress/${id}`}
        hx-trigger="load"
        hx-target="#progress"
      />


      <button
        hx-post={`https://test-back-220v.onrender.com/start/${id}`}
        hx-trigger="click"
        hx-target="#progress"
      >
        Start Job
      </button>


      <div id="progress"></div>
    </div>
  );
};

export default PageTwo;
