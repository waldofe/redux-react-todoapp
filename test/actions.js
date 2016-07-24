import { expect } from 'chai';
import { removeTodo } from '../app/actions';
import { addTodo } from '../app/actions';
import { toggleTodo } from '../app/actions';

describe('addTodo', () => {
  it('returns addTodo action', () => {
    let action = addTodo('Go to mars', 1);
    expect(action).to.eql({ type: 'ADD_TODO', text: 'Go to mars', id: 1 });
  });
});

describe('removeTodo', () => {
  it('returns removeTodo action', () => {
    let action = removeTodo(5);
    expect(action).to.eql({ type: 'REMOVE_TODO', id: 5 });
  });
});

describe('toggleTodo', () => {
  it('returns toggleTodo action', () => {
    let action = toggleTodo(5);
    expect(action).to.eql({ type: 'TOGGLE_TODO', id: 5 });
  });
});