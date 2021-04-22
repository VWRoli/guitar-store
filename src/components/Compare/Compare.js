import { FaTimesCircle } from 'react-icons/fa';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  clearCompareItems,
  removeCompareItem,
} from '../../actions/compareActions';

const mapStateToProps = (state) => ({
  compare: state.compare.compare,
});

const Compare = ({ compare, clearCompareItems, removeCompareItem }) => {
  const containsAmp = compare.some((item) => item.category === 'amp');
  const containsGuitar = compare.some((item) => item.category === 'guitar');

  return (
    <section className='compare'>
      {compare.length !== 0 ? (
        <>
          <table>
            <tbody>
              <tr>
                <th>Image:</th>
                {compare.map((item) => (
                  <td key={item.id}>
                    <img src={item.images[0]} alt={item.name} />
                    <button
                      className='delete-compare-item'
                      onClick={() => removeCompareItem(item.id)}
                    >
                      <FaTimesCircle />
                    </button>
                  </td>
                ))}
              </tr>
              <tr>
                <th>Name:</th>
                {compare.map((item) => (
                  <td key={item.id}>{item.name}</td>
                ))}
              </tr>

              <tr>
                <th>Brand:</th>
                {compare.map((item) => (
                  <td key={item.id}>{item.brand}</td>
                ))}
              </tr>

              <tr>
                <th>Type:</th>
                {compare.map((item) => (
                  <td key={item.id}>{item.type}</td>
                ))}
              </tr>
              {containsGuitar ? (
                <>
                  <tr>
                    <th>Color:</th>
                    {compare.map((item) => (
                      <td key={item.id}>{item.fantasyColor}</td>
                    ))}
                  </tr>

                  <tr>
                    <th>Orientation:</th>
                    {compare.map((item) => (
                      <td key={item.id}>{item.orientation}</td>
                    ))}
                  </tr>

                  <tr>
                    <th>Neck Wood:</th>
                    {compare.map((item) => (
                      <td key={item.id}>{item.neckWood}</td>
                    ))}
                  </tr>

                  <tr>
                    <th>Number of Strings:</th>
                    {compare.map((item) => (
                      <td key={item.id}>{item.strings}</td>
                    ))}
                  </tr>

                  <tr>
                    <th>Number of Frets:</th>
                    {compare.map((item) => (
                      <td key={item.id}>{item.fretNumber}</td>
                    ))}
                  </tr>

                  <tr>
                    <th>Pickups:</th>
                    {compare.map((item) =>
                      item.pickups ? (
                        <td key={item.id}>{item.pickups.config}</td>
                      ) : (
                        <td key={item.id}></td>
                      )
                    )}
                  </tr>

                  <tr>
                    <th>Neck:</th>
                    {compare.map((item) =>
                      item.pickups ? (
                        <td key={item.id}>{item.pickups.neck}</td>
                      ) : (
                        <td key={item.id}></td>
                      )
                    )}
                  </tr>
                  <tr>
                    <th>Middle:</th>
                    {compare.map((item) =>
                      item.pickups ? (
                        <td key={item.id}>{item.pickups.middle}</td>
                      ) : (
                        <td key={item.id}></td>
                      )
                    )}
                  </tr>
                  <tr>
                    <th>Bridge:</th>
                    {compare.map((item) =>
                      item.pickups ? (
                        <td key={item.id}>{item.pickups.bridge}</td>
                      ) : (
                        <td key={item.id}></td>
                      )
                    )}
                  </tr>

                  <tr>
                    <th>Made in:</th>
                    {compare.map((item) => (
                      <td key={item.id}>{item.countryOrigin}</td>
                    ))}
                  </tr>
                </>
              ) : (
                <></>
              )}

              {containsAmp ? (
                <>
                  <tr>
                    <th>Power:</th>
                    {compare.map((item) => (
                      <td key={item.id}>{item.power ? 'Yes' : 'No'}</td>
                    ))}
                  </tr>
                  <tr>
                    <th>Speakers:</th>
                    {compare.map((item) => (
                      <td key={item.id}>{item.speakers ? 'Yes' : 'No'}</td>
                    ))}
                  </tr>
                  <tr>
                    <th>Speaker Type:</th>
                    {compare.map((item) => (
                      <td key={item.id}>{item.speakerType ? 'Yes' : 'No'}</td>
                    ))}
                  </tr>

                  <tr>
                    <th>Reverb:</th>
                    {compare.map((item) => (
                      <td key={item.id}>{item.reverb ? 'Yes' : 'No'}</td>
                    ))}
                  </tr>
                  <tr>
                    <th>USB:</th>
                    {compare.map((item) => (
                      <td key={item.id}>{item.usb ? 'Yes' : 'No'}</td>
                    ))}
                  </tr>
                </>
              ) : (
                <></>
              )}
            </tbody>
          </table>
          <button
            className='clear-compare-btn'
            onClick={() => clearCompareItems()}
          >
            Clear Table
          </button>
        </>
      ) : (
        <h2 className='no-comparison-msg'>No items to compare...</h2>
      )}
    </section>
  );
};

export default connect(mapStateToProps, {
  clearCompareItems,
  removeCompareItem,
})(Compare);

Compare.propTypes = {
  clearCompareItems: PropTypes.func,
  compare: PropTypes.array,
  removeCompareItem: PropTypes.func,
};
