import styled from "styled-components";
import GoogleLogin from 'react-google-login';
const Container = styled.div`
 display: flex;
 flex-direction: column;
 background: #000;
 height: 100vh;
`
const LayerOne = styled.div`
    color: white;
    width: 100%;
    font-weight: bold;
    background-color: rgb(86, 188, 166);
    padding: 50px 50px 140px;
    font-size: 14px;
`
const LoginBox = styled.div`
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px;
    width: 70%;
    padding: 30px 50px 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -80px;
    background-color: white;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-evenly;
    gap: 40px;
`
const LeftBox = styled.div`

display: flex;
flex-grow: 1;
flex-direction: column;
`

const RightBox = styled.div`

display: flex;
`
const PrimaryTitle = styled.h1`
    font-size: 28px;
    font-weight: 300;
    line-height: normal;
    color: #41525d;
`
const Ol = styled.ol`
    color: #41525d;
    line-height: 2;
`
const Auth = () => {
    const responseGoogle = (response) => {
        console.log(response)
    }
    return <Container>
        <LayerOne></LayerOne>
        <LoginBox>
            <LeftBox>
                <PrimaryTitle>To use WhatsApp on your computer:</PrimaryTitle>
                <Ol>
                    <li>You need to Signin using your Google Account.</li>
                    <li>You can anytime logout from the Web.</li>
                    <li>Click on Signin button to continue using the Whatsapp Clone.</li>
                </Ol>
            </LeftBox>
            <RightBox>
                <GoogleLogin
                    clientId="469590001127-uhul6apncegl6cigv98sptlgc9pab3bc.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    isSignedIn={true}
                />
            </RightBox>

        </LoginBox>
    </Container>;
}
export default Auth;