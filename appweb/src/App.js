import React from 'react';
import { Button } from 'reactstrap';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';


function App(props) {
  return (
    <div>
      <Headers />
      <Article />
      <Footer />
      <Button color="primary">Ver mais opções.</Button>
    </div>
  );
}

export default App;
