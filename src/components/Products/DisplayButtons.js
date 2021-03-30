import { useProductContext } from './productContext';
import PropTypes from 'prop-types';

const DisplayButtons = ({ buttons, active, setActive }) => {
  const { setPage, setDisplayItems } = useProductContext();

  const adjustDisplayItems = (item, i) => {
    setDisplayItems(item);
    setPage(1);
    setActive(i);
  };
  return (
    <div className="display-options">
      {buttons.map((btn, i) => {
        return (
          <button
            key={i}
            onClick={() => adjustDisplayItems(btn.label, i)}
            className={i === active ? 'active-btn' : ''}
          >
            {btn.label}
          </button>
        );
      })}
    </div>
  );
};

export default DisplayButtons;

DisplayButtons.propTypes = {
  buttons: PropTypes.array.isRequired,
  active: PropTypes.number,
  setActive: PropTypes.func,
};
