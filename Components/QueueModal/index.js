import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Label
} from "native-base";

import { View } from "react-native";

import styles from "./styles";

class QueueModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfGuests: 0
    };
  }

  render() {
    return (
      <View>
        <Form>
          <Item stackedLabel>
            <Label># of Guests:</Label>
            <Input
              placeholder={this.state.numOfGuests}
              onChangeText={numOfGuests => this.setState({ numOfGuests })}
            />
          </Item>
        </Form>
      </View>
    );
  }
}

export default QueueModal;
