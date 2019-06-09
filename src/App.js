import React from 'react';
import WithChat from './hocs/WithChat';
import WithAdmin from './hocs/WithAdmin';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  );
}

const Home = () => <WithChat />;

const Admin = () => <WithAdmin />;

export default App;
