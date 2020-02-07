import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CodePush from 'react-native-code-push';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import OneSignal from 'react-native-onesignal';
import store from './store';

import Routes from './routes';
import NavigationService from './services/navigation';

class App extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('d886b6d9-0ec9-4854-93f7-c5bc0c2786c0');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  onReceived = data => {};

  onOpened = notification => {};

  onIds = id => {};

  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#141419" />
        <Routes
          ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
        />
      </Provider>
    );
  }
}

export default App;
