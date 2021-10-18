import PropTypes from 'prop-types';
import styles from './info.module.css';


const Info = ({todosLength, totalCounts, onDelete}) => {
    return (
        <div className={styles.info}>
          <div className={styles.infototal}>
            <p>{`Total List : ${todosLength}`}</p>
          </div>

          <div className={styles.infototal}>
            <p>{`Total Count : ${totalCounts}`}</p>
          </div>

          <button onClick={onDelete} className={styles.deleteallbutton}>
            Delete All List
          </button>
        </div>
    )
}

Info.propTypes = {
    todosLength: PropTypes.number,
    totalCounts: PropTypes.func,
    onDelete: PropTypes.func
}

export default Info;