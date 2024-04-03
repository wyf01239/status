import React, { Component } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDateTime: '',
    };
  }

  componentDidMount() {
    this.updateDateTime();
  }

  updateDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentDateTime = ` - ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    this.setState({ currentDateTime });
  };

  render() {
    const { currentDateTime } = this.state;

    const apikeys = this.props;

    return (
      <>
        <Header />
        <div className='container'>
          <div id='uptime'>
            {apikeys.map((key) => (
              <UptimeRobot key={key} apikey={key} />
            ))}
          </div>
          <div id='footer'>Copyright &copy; 2020-{new Date().getFullYear()} <Link to='https://wyf9.top' text='wyf9' />. - Powered by <Link to='https://status.org.cn' text='STATUS.ORG.CN' />, Version {Package.version}{currentDateTime}</div>
        </div>
      </>
    );
  }
}

export default App;
