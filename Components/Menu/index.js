import React, { Component } from "react";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList
} from "accordion-collapse-react-native";

import { Content, Separator } from "native-base";
import { View, Text } from "react-native";

import CategoryItem from "./CategoryItems";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "Getting Started",
          body:
            "React native Accordion/Collapse component, very good to use in toggles & show/hide content"
        },
        {
          title: "Components",
          body: "AccordionList,Collapse,CollapseHeader & CollapseBody"
        }
      ]
    };
  }

  _head(item) {
    return (
      <Separator bordered style={{ alignItems: "center" }}>
        <Text>{item.title}</Text>
      </Separator>
    );
  }

  _body(item) {
    return (
      <View style={{ padding: 15 }}>
        <Text style={{ textAlign: "center" }}>{item.body}</Text>
      </View>
    );
  }
  render() {
    const { category } = this.props;

    console.log("item", category);
    let CatList;

    CatList = category.map(category => (
      <CategoryItem key={category.id} category={category} />
    ));

    return <Content>{CatList}</Content>;
  }
}

export default Menu;
