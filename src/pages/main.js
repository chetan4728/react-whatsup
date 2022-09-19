import { useState } from "react";
import styled from "styled-components";
import ChatBox from "../components/chatbox";
import ContactList from "../components/contactList";
import DefaultPage from "../components/defaultPage";
import { contactList , messagesList} from "../sample";

const Container = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 width: 100%;
 height: 100vh;
 margin: 0px;
`
const Main = () => {
  const [selectedChat, setChat] = useState();
  return <Container>
    <ContactList setChat={setChat} contacts={contactList} ></ContactList>
    {selectedChat ?     <ChatBox chat={messagesList}  selectedChat={selectedChat}></ChatBox> : <DefaultPage></DefaultPage>}

  </Container>
}
export default Main;