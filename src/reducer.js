
export const ADD_PHRASE = "ADD_PHRASE"
export const REMOVE_PHRASE = "REMOVE_PHRASE"


const reducer = (state, action) => {

    switch (action.type) {
        case ADD_PHRASE:
            if (action.phrase.length < 3) {
                alert('Whoops =P Your item must have more than 3 characters')
                return state
              }
          
              if (state.includes(action.phrase)) {
                alert('This item already exists. Type a new one =D')
                return state
              }
            return [...state, action.phrase];

        case REMOVE_PHRASE:
            return state.filter(phrase => phrase !== action.phrase)
    
        default:
            return state;
    }



}

export default reducer