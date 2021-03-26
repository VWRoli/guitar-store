import { useProductContext } from './productContext';

const DisplayButtons = ({ buttons, active, setActive }) => {
  const { setDisplayItems, setPage } = useProductContext();

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