import React from 'react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarItem } from 'flowbite-react';

function AppNavbar() {
  return (
    <Navbar>
      <NavbarBrand href="/">Loja de Roupas</NavbarBrand>
      <NavbarCollapse>
        <NavbarItem>
          <NavbarLink href="/">Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="/products">Produtos</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="/cart">Carrinho</NavbarLink>
        </NavbarItem>
      </NavbarCollapse>
    </Navbar>
  );
}

export default AppNavbar;
