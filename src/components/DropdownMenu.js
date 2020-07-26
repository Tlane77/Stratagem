import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";



const DropItHot = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Launguage</DropdownItem>
                <DropdownItem>Choose One</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Python</DropdownItem>
                <DropdownItem>JavaScript</DropdownItem>
                <DropdownItem>PHP</DropdownItem>
                <DropdownItem>C#</DropdownItem>
                <DropdownItem>Ruby</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
    
};   

export default DropItHot
