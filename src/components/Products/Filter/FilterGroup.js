const FilterGroup = ({ items, name }) => {
  return (
    <>
      <h3>{name}:</h3>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i}>
              <label htmlFor={item}>{item}</label>
              <input type="checkbox" name={item} value={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FilterGroup;
