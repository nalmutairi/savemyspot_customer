import React, { Component } from "react";

import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";
import { Separator } from "native-base";
import { View, Text } from "react-native";

//Components
import Item from "./Item";

class CategoryItem extends Component {
  render() {
    const { category } = this.props;

    let ItemList;
    if (category) {
      ItemList = category.item.map(item => <Item item={item} key={item.id} />);
    }

    return (
      <Collapse>
        <CollapseHeader>
          <Separator
            bordered
            style={{
              backgroundColor: "white",
              borderColor: "rgba(157, 143, 136, 0.7)",
              height: 50
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text>{category.name.toUpperCase()}</Text>
            </View>
          </Separator>
        </CollapseHeader>
        <CollapseBody>{ItemList}</CollapseBody>
      </Collapse>
    );
  }
}

export default CategoryItem;
