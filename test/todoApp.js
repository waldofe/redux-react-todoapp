import { expect } from 'chai';
import todoApp from '../app/todoApp';

describe('todoApp', () => {
  describe('when unhandled action', function () {
    it('returns initial state', function () {
      let initialState = {
        todos: [
          {
            text: 'Go to mars',
            completed: false
          }
        ]
      }

      expect(todoApp(initialState, { type: 'EXPLODE_TODO' })).to.eql(initialState)
    });
  });

  describe('when ADD_TODO action', function () {
    it('returns a new todos list with new todo', function () {
      let initialState = {
        todos: []
      }

      let afterState = {
        todos: [
          {
            text: 'Go to mars',
            completed: false
          }
        ]
      }

      expect(todoApp(initialState, { type: 'ADD_TODO', text: 'Go to mars' })).to.eql(afterState)
    });
  });

  describe('when TOGGLE_TODO action', function () {
    it('returns a new todos list with the completed todo', function () {
      let initialState = {
        todos: [
          {
            text: 'Go to mars',
            completed: false
          },
          {
            text: 'Go to jupiter',
            completed: false
          }
        ]
      }

      let afterState = {
        todos: [
          {
            text: 'Go to mars',
            completed: true
          },
          {
            text: 'Go to jupiter',
            completed: false
          }
        ]
      }

      expect(todoApp(initialState, { type: 'TOGGLE_TODO', index: 0 })).to.eql(afterState)
    });
  });

  describe('when REMOVE_TODO action', function () {
    it('returns a new todos list without removed todo', function () {
      let initialState = {
        todos: [
          {
            text: 'Go to mars',
            completed: false
          },
          {
            text: 'Go to jupiter',
            completed: false
          },
          {
            text: 'Go to earth',
            completed: false
          }
        ]
      }

      let afterState = {
        todos: [
          {
            text: 'Go to mars',
            completed: false
          },
          {
            text: 'Go to earth',
            completed: false
          }
        ]
      }

      expect(todoApp(initialState, { type: 'REMOVE_TODO', index: 1 })).to.eql(afterState)
    });
  });
});
