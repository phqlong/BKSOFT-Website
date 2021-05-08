import { Col, Row } from "reactstrap"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, Container, Card } from 'react-bootstrap';

import "./aboutus.css";
import Banner from "../../../components/Banner"

import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa"

const AboutUs = () => {
  return (
    <section className="Aboutus">
      <Banner
        title="</> Chúng tôi là ai?"
        content="Sứ mệnh của chúng tôi là giúp khách hàng đạt được những kết quả đáng kinh ngạc, biến ý tưởng của họ thành những sản phẩm có thể bán được trên thị trường."
      />

      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/home">Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item active style={{ color: 'white' }}>Chúng tôi</Breadcrumb.Item>
        </Breadcrumb>
        <h4 style={{ color: 'white' }}>
          Đội ngũ chúng tôi có 4 thành viên, đó là:
        </h4>

        <Row lg={4} md={1}>
          <Col lg={true}>
            <Card>
              <Card.Body>
                <Card.Title>Phan Quốc Long</Card.Title>
                <Card.Text>
                  Student's ID: 1810299 <br /><br />
                  <i class="icofont-envelope"></i>
                  <a href="mailto:phqlong2810@gmail.com"> Email me</a>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="card-footer-social-list">
                  <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
                  <a href="https://vn.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                  <a href="https://github.com/phqlong/Web-assignment" target="_blank" rel="noreferrer"><FaGithub /></a>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg={true}>
            <Card>
              <Card.Body>
                <Card.Title>Nguyễn Trần Hoàn Duy</Card.Title>
                <Card.Text>
                  Student's ID: 1811731 <br /><br />
                  <i class="icofont-envelope"></i>
                  <a href="mailto:phqlong2810@gmail.com"> Email me</a>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="card-footer-social-list">
                <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
                  <a href="https://vn.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                  <a href="https://github.com/phqlong/Web-assignment" target="_blank" rel="noreferrer"><FaGithub /></a>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg={true}>
            <Card>
              <Card.Body>
                <Card.Title>Lê Ngọc Hiếu</Card.Title>
                <Card.Text>
                  Student's ID: 1812164 <br /><br />
                  <i class="icofont-envelope"></i>
                  <a href="mailto:phqlong2810@gmail.com"> Email me</a>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="card-footer-social-list">
                <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
                  <a href="https://vn.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                  <a href="https://github.com/phqlong/Web-assignment" target="_blank" rel="noreferrer"><FaGithub /></a>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg={true}>
            <Card>
              <Card.Body>
                <Card.Title>Đinh Tiến Dũng</Card.Title>
                <Card.Text>
                  Student's ID: 1710854 <br /><br />
                  <i class="icofont-envelope"></i>
                  <a href="mailto:phqlong2810@gmail.com"> Email me</a>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="card-footer-social-list">
                  <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
                  <a href="https://vn.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                  <a href="https://github.com/phqlong/Web-assignment" target="_blank" rel="noreferrer"><FaGithub /></a>
                </div>
              </Card.Footer>
            </Card>
            <br />
          </Col>

        </Row>


      </Container>
    </section>
  )
}


export default AboutUs