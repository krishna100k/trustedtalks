import styles from "./Chats.module.css";
import { Typography, Avatar, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
const Chats = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState([]);
  const [sendChat, setSendChat] = useState("")
  const [successfullSend, setSuccessfullSend] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:3000/chats/username", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.username);
        setUsername(res.data.username);
      })
      .catch((err) => console.log(err));

      const fetchData = () => {
        axios
        .get("http://localhost:3000/chats/messages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setSuccessfullSend(false)
        })
        .catch((err) => {
          console.log(err);
        });
      }

      fetchData()

      setInterval(fetchData, 1000)


  }, [token, successfullSend]);




  const sendHandler = () => {

    const data = {
        username: username,
        message: sendChat
    }

    axios.post("http://localhost:3000/chats", data, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    .then((res)=> console.log(res))
    .catch((err) => console.log(err))

    setSuccessfullSend(true);
  }



  const logoutHandler = () => {
    localStorage.setItem("token", null)
    window.location = "/";
  };


  return (
    <div>
      <div className={styles.main}>
        <div className={styles.leftContainer}>

            <div className={styles.title}>
              <Typography variant="h4">Trusted Talks</Typography>
            </div>



        </div>

        <div className={styles.rightContainer}>
          <div className={styles.navbar}>
            <div className={styles.user}>
              <Avatar
                sx={{ width: 60, height: 60 }}
                alt={username}
                src="/static/images/avatar/1.jpg"
              />
              <Typography variant="subtitle1">{username}</Typography>
            </div>
            <Button variant="contained" onClick={logoutHandler}>
              Logout
            </Button>
          </div>

          <div className={styles.messages} >
            {data.map((message) => {
              const isCurrentUser = message.username === username;
              const messageStyle = isCurrentUser
                ? styles.messageCurrentUser
                : styles.messageOtherUser;

              return (
                <div key={message.id} className={messageStyle}>
                  <div className={styles.messageCard}>
                    <Typography variant="subtitle1">
                      {message.message}
                    </Typography>
                    <Typography variant="caption">
                      {message.username}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.searchBar}>
          <input placeholder="Type a message" onChange={(e)=> setSendChat(e.target.value)}/>
          <Button variant="contained" onClick={sendHandler}>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
