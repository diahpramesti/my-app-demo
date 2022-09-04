import PropTypes from 'prop-types'; // ES6

const Bar = ({ title, textColor, customStyle }) => {
  return (
    <bar
      style={{
        ...customStyle,
        color: textColor,
      }}
    >
      { title }
    </bar>
  )
}

Bar.propTypes = {
  title: PropTypes.string,
  textColor: PropTypes.string,
  customStyle: PropTypes.object
}

Bar.propTypes = {
  title: 'Submit',
  textColor: 'black',
  customStyle: {}
}


export {Bar};