import { Container, Row, Col, Card, Placeholder } from "react-bootstrap";

const ProfileSkeleton = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card.Body>
            <Row>
              <Col md={4} className="text-center">
                <Placeholder
                  className="rounded-circle"
                  animation="glow"
                  style={{ width: "150px", height: "150px" }}
                />
                <Placeholder as="h3" animation="wave">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as="p" animation="wave" className="text-muted">
                  <Placeholder xs={4} />
                </Placeholder>
              </Col>
              <Col md={8}>
                <Placeholder as="h4" animation="wave">
                  <Placeholder xs={8} />
                </Placeholder>
                <Placeholder as="p" animation="wave">
                  <Placeholder xs={12} />
                  <Placeholder xs={12} />
                  <Placeholder xs={10} />
                </Placeholder>
                <Placeholder as="h4" animation="wave">
                  <Placeholder xs={8} />
                </Placeholder>
                <Placeholder as="p" animation="wave">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as="p" animation="wave">
                  <Placeholder xs={5} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} className="mt-3" />
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSkeleton;
