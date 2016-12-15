import arrayToObject from '../../helpers/array-to-object';

export default function standups(state = {}, action) {
  switch (action.type) {
    case 'GET_STANDUPS':
      return {
        ...arrayToObject(action.standups)
      };
    default:
      return state
  }
}