import React from 'react';
// import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Sidebar from 'react-bootstrap-sidebar-menu';

const SideBar = () => {
     return (
          <div className="sidebar">
               <Sidebar>
                    <Sidebar.Collapse>
                         <Sidebar.Header>
                              <Sidebar.Brand>brand icon</Sidebar.Brand>
                              <Sidebar.Toggle />
                         </Sidebar.Header>
                         <Sidebar.Body>
                              <Sidebar.Nav>
                              <Sidebar.Nav.Link>
                                   <Sidebar.Nav.Icon>menu item icon</Sidebar.Nav.Icon>
                                   <Sidebar.Nav.Title>menu item title</Sidebar.Nav.Title>
                              </Sidebar.Nav.Link>
                              <Sidebar.Sub>
                                   <Sidebar.Sub.Toggle>
                                   <Sidebar.Nav.Icon />
                                   <Sidebar.Nav.Title>sub menu item title</Sidebar.Nav.Title>
                                   </Sidebar.Sub.Toggle>
                                   <Sidebar.Sub.Collapse>
                                   <Sidebar.Nav>
                                   <Sidebar.Nav.Link>
                                        <Sidebar.Nav.Icon>sum menu item icon</Sidebar.Nav.Icon>
                                        <Sidebar.Nav.Title>sub menu item title</Sidebar.Nav.Title>
                                   </Sidebar.Nav.Link>
                                   </Sidebar.Nav>
                                   </Sidebar.Sub.Collapse>
                              </Sidebar.Sub>
                              </Sidebar.Nav>
                         </Sidebar.Body>
                    </Sidebar.Collapse>
               </Sidebar>
          </div>
     );
};

export default SideBar;