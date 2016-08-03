import { expect } from 'chai';
import visibilityFilter from '../../src/reducers/visibilityFilter';

describe('visibilityFilter', () => {
  describe('when unhandled action', function () {
    it('returns initial state', function () {
      let initialState = 'SHOW_ALL'

      expect(
        visibilityFilter(initialState, { type: 'SET_WHATEVER_FILTER', filter: 'SHOW_COMPLETED' })
      ).to.eql(initialState)
    });
  });

  describe('when handled action', function () {
    it('returns initial state', function () {
      let initialState = 'SHOW_ALL'

      expect(
        visibilityFilter(initialState, { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED' })
      ).to.eql('SHOW_COMPLETED')
    });
  });
});