import React from "react";
import { Menu } from "semantic-ui-react";
const Header = () => {
  return (
    <Menu style={{ margin: "10px" }}>
      <Menu.Item>HandOver</Menu.Item>

      <Menu.Item>Campaigns</Menu.Item>
      {/* // */}
      <Menu.Menu position="right">
        {/* <Menu.Item>Help</Menu.Item> */}
        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
export default Header;
