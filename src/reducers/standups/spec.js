import standupsReducer from './index';

describe('Standups Reducer', () => {
  describe('the GET_STANDUPS action', () => {
    it('updates the empty state', () => {
      const nextState = standupsReducer({}, {
        type: 'GET_STANDUPS',
        standups: [{id: 1, name: 'standup'}]
      });
      expect(nextState[1]).toEqual({id: 1, name: 'standup'});
    });

    it('replaces the state', () => {
      const nextState = standupsReducer({
        2: {id: 2, name: 'standup2'}
      }, {
        type: 'GET_STANDUPS',
        standups: [{id: 1, name: 'standup'}]
      });
      expect(nextState[1]).toEqual({id: 1, name: 'standup'});
      expect(Object.keys(nextState)[0]).toEqual('1');
    });
  });
});