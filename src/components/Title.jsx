import React from 'react';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    // console.log(headline);
    return <h2>{ headline }</h2>;
  }
}

export default Title;
