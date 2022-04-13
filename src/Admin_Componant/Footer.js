import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* <footer>
          <Container>
          <Row>
          <Col className="text-center">
          <span>Copyright &copy; Parth Patel</span>
          </Col>
          </Row>
          </Container>
        </footer> */}
        <footer className="main-footer">
          {/* .content-wrapper */}
          <strong>
            Copyright © <a href="http://adminlte.io">Parth Patel</a>
          </strong>
          <br></br>
          All rights reserved.
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 1.0.0
          </div>
        </footer>
      </div>
    );
  }
}
