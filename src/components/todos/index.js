import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './todos.module.css';

import plusIcon from '../../assets/plus-icon.svg';
import minusIcon from '../../assets/minus-icon.svg';

const Todos = (props) => {
    return (
        <div className="todos">
            {props.todos.map((todo, index, arr) => {
              return (
                <div key={index} 
                  //className={`todo ${!(arr.length === index + 1) && 'todo-devider'}`}
                  className={classNames(styles.todo, {
                    [styles.todoDivider] : !(arr.length === index + 1)
                  })}
                >
                  {todo.title}
                  <div className={styles.todoiconwrapper}>
                    <div className={styles.todocount}>{todo.count}</div>

                    <button onClick={() => props.onSubstraction(index)} className={styles.todoactionbutton}>
                      <img src={minusIcon} alt="minus icon"/>
                    </button>

                    <button onClick={() => props.onAddition(index)} className={styles.todoactionbutton}>
                      <img src={plusIcon} alt="plus icon"/>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
    )
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number
    })),
    onSubstraction: PropTypes.func,
    onAddition: PropTypes.func
}

export default Todos;