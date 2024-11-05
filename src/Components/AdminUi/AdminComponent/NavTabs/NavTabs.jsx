import React, { useState } from "react";
import { Tab, Nav, Container } from "react-bootstrap";
import tabData from "../../../../Data/AdminUi/NavComponent/tabData";

const NavTabs = () => {
  const [key1, setKey1] = useState(tabData[1].id); 
  const [key2, setKey2] = useState(tabData[1].id); 

  return (
    <Container className='mt-3'>
      <div className="card shadow">
        <div className="card-header">
          <h5 className="card-title mb-0">Nav Tabs</h5>
          <p className="mb-0">
            Takes the basic nav and adds the <code>.nav-tabs</code> class to
            generate a tabbed interface.
          </p>
        </div>
        <div className="row">
        
        <div className="col-6">
 
          <Tab.Container
            id="left-tabs-example1"
            activeKey={key1}
            onSelect={(k) => setKey1(k)}
            >
            <Nav variant="tabs">
              {tabData.map((tab) => (
                  <Nav.Item key={tab.id}>
                  <Nav.Link eventKey={tab.id}>
                    <span className="d-block d-sm-none"></span>
                    <span className="d-none d-sm-block">{tab.title}</span>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            <Tab.Content className="p-3 text-muted">
              {tabData.map((tab) => (
                <Tab.Pane key={tab.id} eventKey={tab.id}>
                  {tab.content}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </div>
        <div className="col-6">
          <Tab.Container
            id="left-tabs-example2"
            activeKey={key2}
            onSelect={(k) => setKey2(k)}
            >
            <Nav variant="pills" className="nav-justified mt-4">
              {tabData.map((tab) => (
                  <Nav.Item key={tab.id}>
                  <Nav.Link eventKey={tab.id}>
                    <span className="d-block d-sm-none"></span>
                    <span className="d-none d-sm-block">{tab.title}</span>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            <Tab.Content className="p-3 text-muted">
              {tabData.map((tab) => (
                  <Tab.Pane key={tab.id} eventKey={tab.id}>
                  {tab.content}
                </Tab.Pane>
              ))}
            </Tab.Content>
              
          </Tab.Container>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavTabs;
