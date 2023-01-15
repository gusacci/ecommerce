import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/h-m-magazine-2022/september_2022/bags-evergreen/Evergreen-Bags-Handbag-guide-hero.jpg]&scale=size[1200]&sink=format[jpeg],quality[80]")
    center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Button = styled.button`
  margin: 20px 0;
  width: 40%;
  border: none;
  cursor: pointer;
  border: 1px solid black;
  padding: 10px;
  background-color: white;
`;

const Link = styled.a`
  padding-top: 1px;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
`;

const Login = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />

            <Button>LOGIN</Button>
            <Link>FORGOT PASSWORD</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Login;
