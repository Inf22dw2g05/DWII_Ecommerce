import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

function Headers(args) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="primary" dark expand="md" >
          <NavbarBrand href="/">E-Sports Store</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/"></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.newbalance.pt/pt/desportos/futebol/football-club-product/fc-porto/">
                  FC Porto
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.newbalance.pt/pt">
                  New Balance
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Categorias
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Vestuários</DropdownItem>
                  <DropdownItem>Calçados</DropdownItem>
                  <DropdownItem>Acessórios</DropdownItem>
                  <DropdownItem>Mais Vendidos</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Promoções</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Marcas
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Nike</DropdownItem>
                  <DropdownItem>Adidas</DropdownItem>
                  <DropdownItem>New Balance</DropdownItem>
                  <DropdownItem>Puma</DropdownItem>
                  <DropdownItem>Reebok</DropdownItem>
                  <DropdownItem>Skechers</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Outras</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>+info</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default Headers;