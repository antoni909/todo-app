import { Link } from 'react-router-dom';

const NoMatch = () => {
  return(
    <div>
      <p>We did not find what you were looking for, Sorry :(</p>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}
export default NoMatch;
