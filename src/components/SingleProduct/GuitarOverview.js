const GuitarOverview = ({ product }) => {
  const {
    name,
    brand,
    countryOrigin,
    fantasyColor,
    fretNumber,
    neckWood,
    orientation,
    pickups,
    strings,
    type,
  } = product;

  return (
    <tbody>
      <tr colSpan="2">
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
        <th>Color:</th>
        <td>{fantasyColor}</td>
      </tr>
      <tr>
        <th>Orientation:</th>
        <td>{orientation}</td>
      </tr>
      <tr>
        <th>Neck wood:</th>
        <td>{neckWood}</td>
      </tr>
      <tr>
        <th>Number of Strings:</th>
        <td>{strings}</td>
      </tr>
      <tr>
        <th>Number of Frets:</th>
        <td>{fretNumber}</td>
      </tr>
      {pickups ? (
        <>
          <tr>
            <th>Pickups:</th>
            <td>{pickups.config}</td>
          </tr>
          <tr>
            <th>Neck:</th>
            <td>{pickups.neck}</td>
          </tr>
          <tr>
            <th>Middle:</th>
            <td>{pickups.middle}</td>
          </tr>
          <tr>
            <th>Bridge:</th>
            <td>{pickups.bridge}</td>
          </tr>
        </>
      ) : (
        <tr></tr>
      )}

      <tr>
        <th>Made in:</th>
        <td>{countryOrigin}</td>
      </tr>
    </tbody>
  );
};

export default GuitarOverview;
