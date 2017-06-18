import {Todo} from './todo';

describe('Todo', () => {
  it('test constructor', () => {
    let todo = new Todo ("testTodo");
    expect(todo.getTitle).toEqual("testTodo")
  });
});
