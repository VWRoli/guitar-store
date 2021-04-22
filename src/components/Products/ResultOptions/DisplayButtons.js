import { connect } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { setPage, setDisplayItems } from '../../../actions/productActions';

const DisplayButtons = ({ setPage, setDisplayItems }) => {
  const buttons = [
    { label: '9', id: 1 },
    { label: '18', id: 2 },
    { label: '36', id: 3 },
  ];

  const [active, setActive] = useState(1);

  const adjustDisplayItems = (btn) => {
    setDisplayItems(btn.label);
    setPage(1);
    setActive(btn.id);
  };

  return (
    <div className='display-options'>
      {buttons.map((btn) => {
        return (
          <button
            key={btn.id}
            id={btn.id}
            onClick={() => adjustDisplayItems(btn)}
            className={btn.id === active ? 'active-btn' : ''}
          >
            {btn.label}
          </button>
        );
      })}
    </div>
  );
};

export default connect(null, { setPage, setDisplayItems })(DisplayButtons);

DisplayButtons.propTypes = {
  setPage: PropTypes.func,
  setDisplayItems: PropTypes.func,
};
