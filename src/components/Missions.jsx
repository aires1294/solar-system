// import React from 'react';

// class Missions extends React.Component {
//   render() {
//     return <div data-testid="missions" />;
//   }
// }

// export default Missions;

import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="missions" />
        <Title headline="Missões" />
        {missions.map((missaoObj) => (
          <MissionCard
            key={ missaoObj.name }
            name={ missaoObj.name }
            year={ missaoObj.year }
            country={ missaoObj.country }
            destination={ missaoObj.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
