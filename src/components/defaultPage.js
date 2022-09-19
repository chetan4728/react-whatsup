import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background-color: #f0f2f5;
flex:65%;
`;

const ImgBox = styled.div`
display: flex;
position: relative;
align-items: center;
flex-direction: column;
justify-content: center;
width: 100%;
    height: 100%;
    flex-grow: 1;
`
const Img = styled.img`
`
const PrimaryText = styled.h1`
    font-size: 32px;
    font-weight: 390;
    margin-top: 20px;
    line-height: 37.5px;
    color: #41525d;
`
const Details = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    color: #667781;
    margin-top: 15px;

`
const DefaultPage = () => {
    return <Container>
        <ImgBox>
             <Img src="../images/welcome.svg"/>
             <PrimaryText>WhatsApp Web</PrimaryText>
             <Details>
             Send and receive messages without keeping your phone online.<br></br>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
             </Details>
        </ImgBox>
            
    </Container>
}

export default DefaultPage;