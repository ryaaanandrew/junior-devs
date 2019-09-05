import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CANDIDATES } from '../../queries/queries';
import Card from '../layout/Card';

const Register = () => {
  const { loading, data } = useQuery(GET_CANDIDATES);
  const { users } = data;

  const renderList = () => {
    return users.map(user => <Card user={user} key={user.id}/>)
  };
  
  if(loading) {
    return <h1>Loading...</h1>
  }

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