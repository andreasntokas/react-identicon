import React from 'react';
import Header from './Header';
import Input from './Input';
import Grid from './Grid';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  onChange = (e) => {
    this.setState({
      username: e.target.value.trim(),
    });
  };

  render() {
    const { username } = this.state;
    return (
      <div id='app'>
        <Header />
        <Input username={username} onChange={this.onChange} />
        <Grid username={username} />
      </div>
    );
  }
}

export default Container;
