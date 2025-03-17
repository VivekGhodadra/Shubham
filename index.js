import './gesture-handler';
import { AppRegistry } from 'react-native';
import App from './Sources';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import Store from './Sources/Redux';

const Index = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Index);
