## Welcome again to another React project! 👋

# Learning Use Reducer + Tailwind - React Project

## Some code that I'm proud of
```js
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
```

## Built with

- REACT;
- Tailwind.

## Test the project yourself: [Teste the project here!!!](https://use-reducer-tailwind.vercel.app/)

## Author

- Website - [My GitHub](https://github.com/lucasbailo)
- Frontend Mentor - [@lucasbailo](https://www.frontendmentor.io/profile/lucasbailo)
- Instagram - [@lucassbailo](https://www.instagram.com/lucassbailo/)
- LinkedIn - [Lucas Bailo](https://www.linkedin.com/in/lcsbailo)