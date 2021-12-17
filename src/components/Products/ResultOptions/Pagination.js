import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPage } from '../../../actions/productActions';

const mapStateToProps = (state) => ({
  page: state.products.page,
  hasNextPage: state.products.hasNextPage,
});

const Pagination = ({ page, hasNextPage, setPage }) => {
  return (
    <section className="pagination">
      {page !== 1 && <button onClick={() => setPage(1)}>1</button>}
      {page !== 1 && (
        <button onClick={() => setPage(page - 1)}>
          <FaChevronLeft />
        </button>
      )}
      {page > 2 && <button className="ellipsis">...</button>}
      {page > 2 && (
        <button onClick={() => setPage(page - 1)}>{page - 1}</button>
      )}
      <button className="active-page">{page}</button>

      {hasNextPage && (
        <button onClick={() => setPage(page + 1)}>{page + 1}</button>
      )}
      {hasNextPage && (
        <button onClick={() => setPage(page + 1)}>
          <FaChevronRight />
        </button>
      )}
    </section>
  );
};

export default connect(mapStateToProps, { setPage })(Pagination);

Pagination.propTypes = {
  setPage: PropTypes.func,
  page: PropTypes.number,
  hasNextPage: PropTypes.bool,
};
