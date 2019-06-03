import React, { Component } from "react";

import { Content, Text } from "native-base";

//Components
import CategoryItem from "./CategoryItems";

class Menu extends Component {
  render() {
    const { category } = this.props;

    let CatList;
    if (category) {
      CatList = category.map(category => (
        <CategoryItem key={category.id} category={category} />
      ));
    }

    return (
      <Content>
        <Text style={{ marginTop: 30, marginBottom: 10 }}>BROWSE THE MENU</Text>
        {CatList}
      </Content>
    );
  }
}

export default Menu;
