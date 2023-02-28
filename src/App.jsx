import React, {useState} from 'react';
import data from './components/data';
import SingleQuestion from './components/Question';

function App() {

  // eslint-disable-next-line no-unused-vars
  const  [question, setQuestions] = useState(data);

  return (
  <main>
    <div className='container'>
      <h3>
        question and answers about login
      </h3>
      <section className='info'>
        {
          question.map((question) => {
            return (
              <SingleQuestion 
              key={question.id} 
              {...question}/>
            )
          })
        }
      </section>
    </div>
  </main>
  )
}

export default App;
