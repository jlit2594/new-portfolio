import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Navigate() {
  return (
    <Nav class='navbar' variant="tabs" defaultActiveKey="#about">
      <Nav.Item className='nav-item'>
        <Nav.Link className='no-line' href="/">About</Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav-item'>
        <Nav.Link className='no-line' href="/projects">Projects</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigate;