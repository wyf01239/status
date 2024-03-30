import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {
  
  const currentYear = new Date().getFullYear(); // 获取当前年份

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>Copyright &copy; 2020-{currentYear} <Link to='https://wyf9.top' text='wyf9' />. - Powered by <Link to='https://status.org.cn' text='STATUS.ORG.CN' />, Version {Package.version}</div>
      </div>
    </>
  );
}

export default App;
