import { useState } from 'react';

const Checkbox = () => {
  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    setCheck(e.target.checked);
  };
  return <input type="checkbox" checked={check} onChange={handleChange} />;
};

export default Checkbox;
