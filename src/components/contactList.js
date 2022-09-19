import styled from "styled-components";
import serachIcon from '../images/search-icon.svg'
import filter from '../images/filter.svg'
import { useState } from "react";
const Container = styled.div`
display: flex;
flex-direction: column;
flex:35%;
height: 100%;
`;

const Header = styled.div`
background-color: #f0f2f5;
display: flex;
padding: 10px 16px;
border-right: 1px solid #ddd;
flex-direction: row;
`
const CurrntProfileBox = styled.div`

display: flex;
flex-grow: 5;

`
const HeaderActionBox = styled.div`
display: flex;
flex-grow: 0;
flex-direction: row;
align-items: center;

column-gap: 30px;

`
const MsgBox = styled.div`
    align-items: center;
    display: flex;
  
    flex-direction: row;

`
const MsgImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

const StatusBox = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;

`
const StatusImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

const InfoBox = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;

`
const InfoImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`
const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const CurrntProfile = styled(ProfileImage)`
width: 40px;
height: 40px;
border-radius: 50px;
object-fit: cover;
`
const Search = styled.div`
 display: flex;
  flex-direction: row;
  padding: 10px;
`
const SearchBox = styled.div`
display: flex;
background-color: #f0f2f5;
border-radius: 8px;
padding: 5px 10px;
flex-grow: 8;
flex-direction: row;
`
const SearchIcon = styled.img`
width: 25px;
height: 25px;
`
const SerachInput = styled.input`
 outline: none;
 background-color: #f0f2f5;
 width: 100%;
  border: none;
  font-size: 15px;
 
`
const Filter = styled.div`
flex-grow: 0.5;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    top: 5px;
    position: relative;

`
const FilterIcon = styled.img`
width: 25px;
height: 25px;
`
const Contactrow = styled.div`
   display: flex;
  flex-direction: row;
  align-items: center;
  
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  padding: 10px  0px;
  background: white;
  cursor: pointer;
  :hover {
    background: #ebebeb;
  }
`




const Contactprofile = styled.div`
display: flex;
margin-left: 10px;
`
const ContactprofileImg = styled.img`
width: 50px;
height: 50px;
border-radius: 50px;
`
const ContactDetails = styled.div`
display: flex;
margin-left: 10px;
margin-top: 5px;
flex-direction: column;
padding-bottom: 10px;
flex-grow: 1;
`
const PrimaryDetails = styled.span`
display: flex;
flex-direction: row;
`
const ContactName = styled.span`
    overflow: hidden;
    font-size: 17px;
    font-weight: 400;
    flex-grow: 4;
    line-height: 21px;
    overflow-wrap: break-word;
text-align: left;`

const LastMsg = styled.span`
    overflow: hidden;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #3b4a549c;
`
const LastTime = styled.span`
font-size: 13px;
text-align: right;
align-items: center;
    display: flex;
margin-right: 10px;
white-space: nowrap;
color: #3b4a549c;
`
const ContactListbox = styled.div`
overflow-y: scroll;
`;

const ContactList = (props) => {
    const [active, setActive] = useState({
        status: false,
        id: 0
    });

    const selectChat = (item) => {
        setActive({ status: true, id: item.id })
        props.setChat(item)
    }
    return <Container>
        <Header>
            <CurrntProfileBox><CurrntProfile src="../images/chetan.jpg" /></CurrntProfileBox>
            <HeaderActionBox>
                <StatusBox><StatusImg src="../images/status.svg" /></StatusBox>
                <MsgBox><MsgImg src="../images/msg.svg" /></MsgBox>
                <InfoBox><InfoImg src="../images/info.svg" /></InfoBox>
            </HeaderActionBox>
        </Header>
        <Search>
            <SearchBox>
                <SearchIcon src={serachIcon} />
                <SerachInput placeholder="Search or start new chat" />
            </SearchBox>
            <Filter>   <FilterIcon src={filter} /></Filter>

        </Search>
        <ContactListbox>
            {props.contacts && props.contacts.map(item => (
                <Contactrow style={{ background: (active.status && active.id === item.id) ? "#ddd" : "#ffff" }} onClick={(e) => selectChat(item)}>
                    <Contactprofile>
                        <ContactprofileImg src={item.profilePic} />
                    </Contactprofile>
                    <ContactDetails>
                        <PrimaryDetails>
                            <ContactName>{item.name}</ContactName>
                            <LastTime>{item.lastTextTime}</LastTime></PrimaryDetails>
                        <LastMsg>{item.lastText}</LastMsg>
                    </ContactDetails>
                </Contactrow>
            ))}
        </ContactListbox>



    </Container>
}

export default ContactList;