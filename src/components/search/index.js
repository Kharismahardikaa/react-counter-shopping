import PropTypes from 'prop-types';

import styles from './search.module.css';

const SearchInput = (props) => {
    return (
        <form className={styles.form} onSubmit={props.onSubmit}>
          <input 
            onChange={props.onChange} 
            value={props.value} className={styles.input} type="text" 
            placeholder="List"
          />
          <button className={styles.addbutton} type="submit">add</button>
        </form>
    )
}

SearchInput.propTypes = {
    onSubmit : PropTypes.func,
    onChange : PropTypes.func,
    value : PropTypes.func
}

export default SearchInput;