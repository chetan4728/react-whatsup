import styled from "styled-components";
import serachIcon from '../images/search-icon.svg'
const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
flex: 65%;
`;
const Header = styled.div`
background-color: #f0f2f5;
display: flex;
padding: 10px 16px;
border-right: 1px solid #ddd;
flex-direction: row;
`
const ProfileDetails = styled.div`
display: flex;
flex-grow: 5;
width: 100%;

`

const ContactName = styled.span`
    overflow: hidden;
    font-size: 17px;
    font-weight: 400;
    line-height: 21px;
    position: absolute;
    margin-left: 10px;
    margin-top: 10px;
    text-align: left;`


const UserProfile = styled.img`
width: 40px;
height: 40px;
border-radius: 50px;
object-fit: cover;`

const SearchButton = styled.div`
display: flex;
background-color: #f0f2f5;
align-items: center;
padding: 5px 10px;
flex-grow: 1;
`
const SearchIcon = styled.img`
width: 26px;
height: 26px;
`
const Chatarea = styled.div`
background-color: #efebe1fa;
height: 100%;
display: flex;
flex-direction: column;
`
const SenderChatboxContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`

const SenderChatbox = styled.div`
background-color: #d9fdd3;
color: #111b21;
padding: 10px 14px;
margin-top: 5px;
font-size: 14.2px;
line-height: 19px;
margin-left: 15px;
display: flex;
border-radius:8px;
max-width: 60%;
width: fit-content;
height: fit-content;
box-shadow: 0 1px 0.5px rgba(11,20,26,.13);

`

const FromChatbox = styled.div`
background-color: #fff;
color: #111b21;
padding: 10px 14px;
margin-top: 5px;
font-size: 14.2px;
line-height: 19px;
margin-left: 15px;
display: flex;
border-radius:8px;
max-width: 60%;
width: fit-content;
height: fit-content;
box-shadow: 0 1px 0.5px rgba(11,20,26,.13);
`
const Chatpanel = styled.div`
background: url('../images/bg-chat.png');
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`

const TypeBox = styled.div`
display: flex;
flex-direction: row;
background-color:#f0f2f5;
height: 62px;


`
const SmilyButton = styled.div`
    padding: 10px 15px;
    flex-grow: 0;
    align-items: center;
    display: flex;
    cursor: pointer;
    flex-direction: row;
`
const Img = styled.img`
 object-fit: cover;
`

const InfoButton = styled.div`
    padding: 10px 15px;
    flex-grow: 0;
    align-items: center;
    display: flex;
    cursor: pointer;
    flex-direction: row;
`

const Search = styled.div`
 display: flex;
  padding: 10px;
  flex-direction: row;
  flex-grow: 1;
`
const InputBox = styled.div`
display: flex;
background-color: #fff;
border-radius: 8px;
width: 100%;
padding: 9px 12px 11px;

`

const TextInput = styled.input`
 outline: none;
 background-color: #fff;
 width: 100%;
  border: none;
  font-size: 15px;
 
`
const MicButton = styled.div`
    padding: 10px 15px;
    flex-grow: 0;
    align-items: center;
    display: flex;
    cursor: pointer;
    flex-direction: row;
`
const MsgContainer = styled.div`
width: 85%;
    margin: 0px auto;
    margin-top: 20px;
`

const ChatBox = (props) => {
    return <Container>
        {props.selectedChat && <><Header>
            <UserProfile src={props.selectedChat.profilePic} />
            <ProfileDetails>
                <ContactName>{props.selectedChat.name}</ContactName>
            </ProfileDetails>

            <SearchButton>
                <SearchIcon src={serachIcon} />
            </SearchButton>
            <InfoButton><Img src="../images/info.svg" /></InfoButton>
        </Header>
            <Chatarea>
                <Chatpanel>
                     <MsgContainer>{props.chat && props.chat.map(item => (
                        (props.selectedChat.id === item.senderID) ? <SenderChatboxContainer><SenderChatbox>{item.text}</SenderChatbox> </SenderChatboxContainer> :(props.selectedChat.id === item.id) ? <FromChatbox>{item.text}</FromChatbox> : ""
                    ))}</MsgContainer>
                    
                </Chatpanel>
                <TypeBox>
                    <SmilyButton><Img src="../images/smiley.svg" /></SmilyButton>
                    <Search>
                        <InputBox>
                            <TextInput placeholder="Type a message" />
                        </InputBox>
                    </Search>
                    <MicButton><Img src="../images/mic.svg" /></MicButton>
                </TypeBox>

            </Chatarea></>}

    </Container>
}

export default ChatBox;