import { CCollapse, CContainer, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CNavItem, CNavLink } from '@coreui/react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '@coreui/coreui/dist/css/coreui.min.css'
import { FUN_theme } from '../utils/setting';
import { Switchmood } from './utils/myutils';

 export function Navgbar() {
  const isAuthenticated = sessionStorage.getItem('c') !== null;
    const [visible, setVisible] = useState(false);
    //
if(isAuthenticated){
    return (
<>

<CNavbar expand="lg" className="bg-body-tertiary" colorScheme={FUN_theme ? 'dark' : 'light'} placement='sticky-top'>
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse" visible={visible} >
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/logout">logout</CNavLink>
            </CNavItem>
            <CNavItem >
              <Switchmood></Switchmood>
            </CNavItem>
          
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
</>
    );
  }else{
    return (<></>);
  }
}


