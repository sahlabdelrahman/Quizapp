import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/play/instructions' component={QuizInstructions} />
        <Route path='/play/quiz' component={Play} />
        <Route path='/play/quizSummary' component={QuizSummary} />
      </Router>
    </div>
  );
}

export default App;
