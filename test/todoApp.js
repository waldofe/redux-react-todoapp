import { expect } from 'chai';
import todoApp from '../app/todoApp';

describe('todoApp', () => {
  describe('when unhandled action', function () {
    it('returns initial state', function () {
      let initialState = {
        todos: [
          {
            text: 'Go to mars',
            completed: false,
            id: 1
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
            completed: false,
            id: 1
          }
        ]
      }

      expect(todoApp(initialState, { type: 'ADD_TODO', text: 'Go to mars', id: 1 })).to.eql(afterState)
    });
  });

  describe('when TOGGLE_TODO action', function () {
    it('returns a new todos list with the completed todo', function () {
      let initialState = {
        todos: [
          {
            text: 'Go to mars',
            completed: false,
            id: 1
          },
          {
            text: 'Go to jupiter',
            completed: false,
            id: 2
          }
        ]
      }

      let afterState = {
        todos: [
          {
            text: 'Go to mars',
            completed: true,
            id: 1
          },
          {
            text: 'Go to jupiter',
            completed: false,
            id: 2
          }
        ]
      }

      expect(todoApp(initialState, { type: 'TOGGLE_TODO', id: 1 })).to.eql(afterState)
    });
  });

  describe('when REMOVE_TODO action', function () {
    it('returns a new todos list without removed todo', function () {
      let initialState = {
        todos: [
          {
            text: 'Go to mars',
            completed: false,
            id: 1
          },
          {
            text: 'Go to jupiter',
            completed: false,
            id: 2
          },
          {
            text: 'Go to earth',
            completed: false,
            id: 3
          }
        ]
      }

      let afterState = {
        todos: [
          {
            text: 'Go to mars',
            completed: false,
            id: 1
          },
          {
            text: 'Go to earth',
            completed: false,
            id: 3
          }
        ]
      }

      expect(todoApp(initialState, { type: 'REMOVE_TODO', id: 2 })).to.eql(afterState)
    });
  });

  describe('when TOGGLE_TODO action', function () {
    describe('when CLEAR_COMPLETED_TODOS', function () {
      it('clears completed todos', function () {
        let initialState = {
          todos: [
            {
              text: 'Go to mars',
              completed: false,
              id: 1
            },
            {
              text: 'Go to jupiter',
              completed: true,
              id: 2
            },
            {
              text: 'Go to earth',
              completed: true,
              id: 3
            }
          ]
        }

        let afterState = {
          todos: [
            {
              text: 'Go to mars',
              completed: false,
              id: 1
            }
          ]
        }

        expect(todoApp(initialState, { type: 'CLEAR_COMPLETED_TODOS', completedTodoIds: [2, 3] })).to.eql(afterState)
      });
    });
  });
});
