const AmpOverview = ({ product }) => {
  const {
    name,
    brand,
    type,
    power,
    speakers,
    speakerType,
    reverb,
    usb,
  } = product;

  return (
    <tbody>
      <tr>
        <th>Name:</th>
        <td>{name}</td>
      </tr>
      <tr>
        <th>Brand:</th>
        <td>{brand}</td>
      </tr>
      <tr>
        <th>Type:</th>
        <td>{type}</td>
      </tr>
      <tr>
        <th>Power:</th>
        <td>{power}</td>
      </tr>

      <tr>
        <th>Speakers:</th>
        <td>{speakers}</td>
      </tr>
      <tr>
        <th>Speaker Type:</th>
        <td>{speakerType}</td>
      </tr>
      <tr>
        <th>Reverb:</th>
        <td>{reverb ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <th>USB:</th>
        <td>{usb ? 'Yes' : 'No'}</td>
      </tr>
    </tbody>
  );
};

export default AmpOverview;
