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
        <td>Name:</td>
        <td>{name}</td>
      </tr>
      <tr>
        <td>Brand:</td>
        <td>{brand}</td>
      </tr>
      <tr>
        <td>Type:</td>
        <td>{type}</td>
      </tr>
      <tr>
        <td>Power:</td>
        <td>{power}</td>
      </tr>

      <tr>
        <td>Speakers:</td>
        <td>{speakers}</td>
      </tr>
      <tr>
        <td>Speaker Type:</td>
        <td>{speakerType}</td>
      </tr>
      <tr>
        <td>Reverb:</td>
        <td>{reverb ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td>USB:</td>
        <td>{usb ? 'Yes' : 'No'}</td>
      </tr>
    </tbody>
  );
};

export default AmpOverview;
