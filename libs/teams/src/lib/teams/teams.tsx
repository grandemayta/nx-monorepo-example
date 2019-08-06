import React, { useState, useEffect } from 'react';
import { getTeams } from '@seriea-nx-example/services';
import './teams.scss';

export const Teams = () => {
  const [teams, setTeams] = useState([]); 

  useEffect(() => {
    getTeams(setTeams);
  });

  return (
    <>
      <h1>Teams</h1>
      <ul>
        {teams.map(team => {
          return (
            <li key={team.id}>
              <a>{team.name}</a>
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default Teams;
