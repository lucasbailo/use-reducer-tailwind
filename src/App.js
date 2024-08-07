import { useReducer, useState } from 'react';
import reducer, { ADD_PHRASE, REMOVE_PHRASE } from './reducer';

function App() {
  const [phrase, setPhrase]= useState('')
  
  const [phrases, dispatch]= useReducer(reducer, [])

  function savePhrase (event) {
    event.preventDefault()
    
    dispatch({
      type: ADD_PHRASE,
      phrase: phrase
    })
  }

  function deletePhrase (deletedPhrase) {
    dispatch({
      type: REMOVE_PHRASE,
      phrase: deletedPhrase
    })
  }


  return (
    <div className="flex flex-col h-screen w-screen items-center bg-slate-300">
      <h1 className="flex pb-5 pt-5 font-bold bg-blue-950 w-full text-white justify-center uppercase">List Creator</h1>
      <h2 className='pt-5 uppercase text-xs font-extralight'>Type the things that you want to add in your list ↓</h2>
      <form className="flex flex-col pt-5 pb-5 w-4/5 justify-center items-center" onSubmit={savePhrase}>
        <textarea
          className='flex items-center justify-center w-1/2 font-extralight max-w-screen text-center border-2 border-gray-600 rounded outline-none focus:border-gray-400 placeholder:text-gray-400' 
          required
          value={phrase}
          onChange={event => setPhrase(event.target.value)}
          placeholder='Insert item...'
        />
        <button className='flex flex-col items-center justify-center w-1/2 mt-5 p-1 bg-slate-800 rounded-full text-gray-300 hover:animate-pulse hover:scale-105'>Add item</button>
      </form>
      <ol className='list-disc'>
        {phrases.map((currentPhrase, index) => <li className='flex items-center w-full justify-center capitalize italic' key={index}>- {currentPhrase}<button className=' bg-red-600 rounded-full p-2 ml-3 hover:animate-ping' onClick={() => deletePhrase(currentPhrase)}></button></li>) }
      </ol>
    </div>
  );
}

export default App;
