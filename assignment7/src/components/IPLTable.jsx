import React, { useEffect, useState } from 'react';

const IPLTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then((res) => res.json())
      .then((data) => {
        // Sort: First by Points DESC, then NRR DESC
        const sorted = data.sort((a, b) => {
          if (b.Points === a.Points) {
            return b.NRR - a.NRR;
          }
          return b.Points - a.Points;
        });
        setTeams(sorted);
      });
  }, []);

  return (
    <div>
      <h2>IPL 2022 Points Table</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.Team}>
              <td>{index + 1}</td> {/* Correct rank */}
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPLTable;
