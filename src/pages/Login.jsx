import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://lp2.hm.com/hmgoepprod?set=width[1440],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/h-m-magazine-2022/november_2022/capsule-wardrobe/NEW-Magazine-Capsule-1-oxfordshirt-jpg.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]")
    center;

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
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  cursor: pointer;
  border: 1px solid black;
  padding: 10px;
  background-color: white;
`;

const Link = styled.a`
  cursor: pointer;
`;

const Login = () => {
  return (
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
  );
};

export default Login;
