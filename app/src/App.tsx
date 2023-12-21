import { NavigationContainer } from '@react-navigation/native';
import React, { createContext, useEffect, useState } from 'react';
import { Voice } from '@twilio/voice-react-native-sdk';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import StackNavigator from './screens/StackNavigator';
import { defaultStore } from './store/app';
import {
  bootstrapAudioDevices,
  bootstrapCalls,
  bootstrapCallInvites,
  bootstrapNavigation,
  bootstrapPushRegistry,
  bootstrapUser,
} from './store/bootstrap';
import { navigationRef } from './util/navigation';
import { defaultUrl } from './util/fetch';
import { getAccessToken } from './store/voice/accessToken';

export type AppContextType = {
  serverUrl: string,
  setServerUrl: (url: string) => void
}

const defaultAppContext: AppContextType = {
  serverUrl: defaultUrl,
  setServerUrl: () => { }
}

export const AppContext = createContext<AppContextType>(defaultAppContext);

const App = () => {
  /**
   * NOTE:
   * When Redux Toolkit dispatches a Thunk, it will put an `AbortController`
   * into the returned Promise as the `abort` member. Invoking the `abort`
   * method will prevent further actions from being dispatched in the Thunk.
   *
   * When a React component is unmounted, it will invoke the return value of any
   * `useEffect` functions. In this case, if the `App` component is unmounted
   * then the `abort` functions are called so the `bootstrap` actions can no
   * longer dispatch actions.
   */
  React.useEffect(() => {
    const bootstrap = async () => {
      await defaultStore.dispatch(bootstrapPushRegistry());
      await defaultStore.dispatch(bootstrapAudioDevices());
      await defaultStore.dispatch(bootstrapUser());
      await defaultStore.dispatch(bootstrapCalls());
      await defaultStore.dispatch(bootstrapCallInvites());
      await defaultStore.dispatch(bootstrapNavigation());
    };

    bootstrap();
  }, []);

  const [url, setUrl] = useState<string>(defaultUrl);


  // useEffect(() => {
  //   const token = getAccessToken();
  //   const voice = new Voice();
  
  //   // Allow incoming calls
  //   await voice.register(token);
  
  //   // Handle incoming calls
  //   voice.on('callInvite', (callInvite) => {
  //     callInvite.accept();
  //   });
  
  //   // Make an outgoing call
  //   const call = await voice.connect(token, params);
  // }, [])

  return (
    <AppContext.Provider value={{
      serverUrl: url,
      setServerUrl: setUrl
    }}>
      <Provider store={defaultStore}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            <StackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </AppContext.Provider>
  );
};

export default App;
