import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import PropTypes from "prop-types";
import db from "../../firebase";
import { Link } from "react-router-dom";

SidebarChat.propTypes = {
  addNewChat: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
};

SidebarChat.defaultProps = {
  addNewChat: false,
};

function SidebarChat({ id, addNewChat, name }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  const createChat = () => {
    const roomName = prompt("Please enter a name of chat room");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.trunc(Math.random() * 5000));
  }, []);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="SidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="SidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="SidebarChat">
      <h2>Add New Chat</h2>;
    </div>
  );
}

export default SidebarChat;
