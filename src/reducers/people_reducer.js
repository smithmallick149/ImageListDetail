const people = {}
export default function people_reducer(state = people,action){
  switch(action.type){
    case "GET_PEOPLE":
      return{
        ...state,
        getPeople:action.payload
      }

      case "PERSON_DETAIL":
        console.log('sssss',action.payload)
        return {
          ...state,
          personDetail:action.payload
        }
    default:
      return state
  }
}