import React from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Spinner } from 'native-base';
import { Font } from 'expo';
import SocketStore from '../stores/socket_store';
import { Provider } from 'react-redux';
import { BlossomApp } from '../components/blossom_app.js';

export class DefaultScreen extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if(!this.state.fontLoaded) {
      return (<Spinner />);
    }

    return (
      <Provider store={SocketStore}>
        <Container>
          <Content>
            <BlossomApp>
              { this.props.children }
            </BlossomApp>
          </Content>
        </Container>
      </Provider>
    );
  }
}
