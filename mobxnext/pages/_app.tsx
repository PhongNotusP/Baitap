import '../styles/globals.css'
import App from "next/app";
import React from "react";
import { Provider } from "mobx-react";
import initializeStore from '../stores';

class CustomApp extends App {
  mobxStore: unknown
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.mobxStore = isServer ? props.initialMobxState : initializeStore();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...this.mobxStore}>
          <Component {...pageProps} />
      </Provider>
    );
  }
}


export default CustomApp
