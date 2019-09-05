import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CANDIDATES } from '../../queries/queries';

const Register = () => {
  const { loading, data } = useQuery(GET_CANDIDATES);
  const { users } = data;

  console.log(users)
  
  if(loading) {
    return <h1>Loading...</h1>
  }

  return(
    <div className="container">
      <div className="candidates">
        <h1>The candidates</h1>

        <div className="card">
          <div className="card__photo"><i class="fas fa-user fa-5x"></i></div>
          <h1 className="card__header">Ryaaanandrew</h1>
            <div className="card__actions">
              <div className="card__button"><i class="fab fa-linkedin-in fa-2x"></i></div>
              <div className="card__button"><i class="fab fa-github fa-2x"></i></div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Register;
