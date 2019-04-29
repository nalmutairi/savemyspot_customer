import React, { Component } from "react";

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList
} from "accordion-collapse-react-native";

import { Separator } from "native-base";
import { View, Text } from "react-native";
import Item from "./Item";

class CategoryItem extends Component {
  render() {
    const { category } = this.props;

    let ItemList;
    ItemList = category.item.map(item => <Item key={item.id} item={item} />);
    return (
      <Collapse>
        <CollapseHeader>
          <Separator bordered>
            <View>
              <Text>{category.name}</Text>
            </View>
          </Separator>
        </CollapseHeader>
        <CollapseBody>{ItemList}</CollapseBody>
      </Collapse>
    );
  }
}

export default CategoryItem;
