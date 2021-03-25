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
        <td>Color:</td>
        <td>{fantasyColor}</td>
      </tr>
      <tr>
        <td>Orientation:</td>
        <td>{orientation}</td>
      </tr>
      <tr>
        <td>Neck wood:</td>
        <td>{neckWood}</td>
      </tr>
      <tr>
        <td>Number of Strings:</td>
        <td>{strings}</td>
      </tr>
      <tr>
        <td>Number of Frets:</td>
        <td>{fretNumber}</td>
      </tr>
      {pickups ? (
        <>
          <tr>
            <td>Pickups:</td>
            <td>{pickups.config}</td>
          </tr>
          <tr>
            <td>Neck:</td>
            <td>{pickups.neck}</td>
          </tr>
          <tr>
            <td>Middle:</td>
            <td>{pickups.middle}</td>
          </tr>
          <tr>
            <td>Bridge:</td>
            <td>{pickups.bridge}</td>
          </tr>
        </>
      ) : (
        <tr></tr>
      )}

      <tr>
        <td>Made in:</td>
        <td>{countryOrigin}</td>
      </tr>
    </tbody>
  );
};

export default GuitarOverview;
