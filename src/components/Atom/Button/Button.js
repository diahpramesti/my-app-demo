import PropTypes from 'prop-types'; // ES6
import styles from './Button.modules.css';

const Button = ({ title, textColor, customStyle }) => {
  return (
    <button
      className={styles.button}
      style={{
        ...customStyle,
        color: textColor
      }}
    >
      { title }
    </button>
  )
}


Button.propTypes = {
  title: PropTypes.string,
  textColor: PropTypes.string,
  customStyle:PropTypes.object
}

Button.propTypes = {
  title: 'Click',
  textColor: 'black',
  customStyle: {}
}
export default Button;