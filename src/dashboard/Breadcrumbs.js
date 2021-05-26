import { Link, withRouter } from 'react-router-dom';

const Breadcrumbs = (props) => {
  const {
    location: { pathname },
  } = props;
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <div className="breadcrumbs">
      {pathnames.map((path, i) => {
        const routeTo = `/${pathnames.slice(0, i + 1).join('/')}`;
        const isLast = i === pathnames.length - 1;
        return isLast ? (
          <p key={i}>{path}</p>
        ) : (
          <Link key={i} to={routeTo}>
            {path}
          </Link>
        );
      })}
    </div>
  );
};

export default withRouter(Breadcrumbs);
