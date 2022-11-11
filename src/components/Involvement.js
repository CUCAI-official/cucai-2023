import React from "react";
import styled from "styled-components";

import Button from "../components/Button";
import theme from "../styles/theme";


import { Tab, Row, Col, Nav } from "react-bootstrap/";

const StyledDetails = styled.div`
  padding: 15px;
  float: left;
`;

const StyledInvolved = styled.div`
  min-height: 200px;
  padding-top: 20px;
`;

const Involved = () => {
  return (
    <StyledInvolved>
      <Tab.Container id="left-tabs-example" defaultActiveKey="Delegates">
        <Row>
          <Col sm={3}>
            <Nav
              variant="pills"
              className="flex-column"
              style={
                {
                  // filter: "drop-shadow(6px 6px 0px #1a4fcb)"
                }
              }
            >
              <Nav.Item>
                <Nav.Link eventKey="Delegates">Delegates</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Speakers">Speakers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Student Groups">Student Groups</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="Delegates">
                <StyledDetails>
                  <p>
                    Delegate applications will open in the new year. Join our Discord to stay up to date!
                  </p>

                  <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://discord.gg/eKy2Pgex">
                    <Button borderStyle="solid">
                      Join Our Discord
                    </Button>
                  </a>
                </StyledDetails>
              </Tab.Pane>
              <Tab.Pane eventKey="Speakers">
                <StyledDetails>
                  <p>
                    As a CUCAI speaker, you will have the unique opportunity to
                    speak to and engage with the nation's leading undergraduate
                    AI talent. Conference speakers are encouraged to provide
                    students with relevant insight from their own work and the
                    AI field in an innovative, creative, and personable way.
                    Speaker opportunities include speeches, as well as panelist
                    positions, workshop leaders and incubator pitch competition
                    judges.
                  </p>

                <a href="mailto:chair@cucai.ca">
                  <Button borderStyle="solid">Conact Us</Button>
                </a>
              </StyledDetails>
            </Tab.Pane>
            <Tab.Pane eventKey="Student Groups">
              <StyledDetails>
                <p>
                  CUCAI aims to bring together students from across the country. We
                  partner with Student Organization throughout Canada to send delegates
                  interested in AI who present their projects at CUCAI.
                  If you are a part of a student organization and want to be a part of 
                  CUCAI, please do not hesitate to contact us at <a href="mailto:chair@cucai.ca" >chair@cucai.ca</a>.
                  For more information, please download our Student Group Partnership Package below.
                </p>

                  <a href="CUCAI Student Group Partnership Package.pdf">
                    <Button borderStyle="solid">
                      Student Group Partnership Package
                    </Button>
                  </a>
                </StyledDetails>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </StyledInvolved>
  );
};

export default Involved;
