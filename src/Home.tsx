import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <div className="App">
        <header className="App-header">
          <iframe src="https://app.ideta.io/share?bd=-NAB0Hovy-T6piz-k8PP" title="Remote Buddy" height="800px" width="450px" frameBorder="0"></iframe>
        </header>
      </div>
      <Link to='/about'>Go to ABOUT</Link>
    </div>
  );
}

export default Home;
