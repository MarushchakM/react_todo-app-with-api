/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { TodoItem } from '../TodoItem';
import { Todo } from '../../types/Todo';
import { Loader } from '../../types/Loader';

type Props = {
  todos: Todo[];
  tempTodo: Todo | null;
  deleteTodo: (id: number) => void;
  changeTodo: (todo: Todo) => void;
  loader: Loader;
  error: boolean;
  changeId: (id: number) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  deleteTodo,
  tempTodo,
  changeTodo,
  loader,
  error,
  changeId,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos?.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          changeTodo={changeTodo}
          changeId={changeId}
          loader={
            typeof loader.id === 'number'
              ? todo.id === loader.id
                ? loader
                : null
              : loader.id.includes(todo.id)
                ? loader
                : null
          }
          error={error}
        />
      ))}

      {tempTodo && (
        <div data-cy="Todo" className="todo">
          <label className="todo__status-label">
            <input
              data-cy="TodoStatus"
              type="checkbox"
              className="todo__status"
            />
          </label>

          <span data-cy="TodoTitle" className="todo__title">
            {tempTodo.title}
          </span>

          <button type="button" className="todo__remove" data-cy="TodoDelete">
            ×
          </button>

          <div data-cy="TodoLoader" className="modal overlay is-active">
            <div className="modal-background has-background-white-ter" />
            <div className="loader" />
          </div>
        </div>
      )}

      {/* This todo is an active todo */}
      {/* <div data-cy="Todo" className="todo">
        <label className="todo__status-label">
          <input
            data-cy="TodoStatus"
            type="checkbox"
            className="todo__status"
          />
        </label>

        <span data-cy="TodoTitle" className="todo__title">
          Not Completed Todo
        </span>
        <button type="button" className="todo__remove" data-cy="TodoDelete">
          ×
        </button>

        <div data-cy="TodoLoader" className="modal overlay">
          <div className="modal-background has-background-white-ter" />
          <div className="loader" />
        </div>
      </div> */}

      {/* This todo is being edited */}
      {/* <div data-cy="Todo" className="todo">
        <label className="todo__status-label">
          <input
            data-cy="TodoStatus"
            type="checkbox"
            className="todo__status"
          />
        </label> */}

      {/* This form is shown instead of the title and remove button */}

      {/* <form>
          <input
            data-cy="TodoTitleField"
            type="text"
            className="todo__title-field"
            placeholder="Empty todo will be deleted"
            value="Todo is being edited now"
          />
        </form>

        <div data-cy="TodoLoader" className="modal overlay">
          <div className="modal-background has-background-white-ter" />
          <div className="loader" />
        </div>
      </div> */}

      {/* This todo is in loadind state */}
      {/* */}
    </section>
  );
};
