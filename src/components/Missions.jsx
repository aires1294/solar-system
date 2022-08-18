// import React from 'react';

// class Missions extends React.Component {
//   render() {
//     return <div data-testid="missions" />;
//   }
// }

// export default Missions;

import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="missions" />
        <Title headline="Missões" />
      </div>
    );
  }
}

export default Missions;
