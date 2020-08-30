// Higher order component (HOC) - A component that renders a component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private info. Please don't share!</p>
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
          <p>You do not have access to this page</p>
        )}
    </div>
  );
}


// const AdminInfo = withAdminWarning(Info);

const AdminInfo = requireAuthentication(Info);

ReactDOM.render(<AdminInfo isAuthenticated={true} info="this is the info" />, document.getElementById('app'))