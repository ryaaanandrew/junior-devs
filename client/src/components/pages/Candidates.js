import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CANDIDATES } from '../../queries/queries';
import Card from '../layout/Card';

const Register = () => {
  const { loading, data, error } = useQuery(GET_CANDIDATES);

  if(loading || error) {
    return <div className="container"><h1>Loading...</h1></div>
  };

  const renderList = () => {
    return data.users.map(user => <Card user={user} key={user.id}/>);
  };

  return(
      <div className="container">
        <div className="candidates">
          <h1 className="candidates__header">Meet your future developers</h1>
          <div className="candidates__list">
            {renderList()}
          </div>
        </div>
      </div>
  );
};

export default Register;
