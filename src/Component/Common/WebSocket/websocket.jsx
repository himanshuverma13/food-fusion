// import React, { useState } from "react";

// import io from "socket.io-client";

// const socket = io.connect("http://localhost:7006");
// const WebSocketComponent = () => {
//   const [first, setfirst] = useState();
//   const submit = () => {
//     // socket.emit("fusion", { msg: "himanshu" });
//     socket.emit("skill", { msg: "himanshu testing websocket" });

//     // socket.on("hello", (data) => {
//     //   console.log("data: ", data);
//     // });
//     socket.on("skill", (data) => {
//     //   setfirst(data?.back);
//       console.log("data: ", decodeURIComponent(data));
//     });
//   };
//   return (
//     <div className="App">
//       <button onClick={submit}>test button</button>
//       {/* <h2>{first}</h2> */}
//     </div>
//   );
// };

// export default WebSocketComponent;

// // import React, { useState } from "react";
// // import useWebSocket from "react-use-websocket";

// // const WebSocketComponent = () => {
// //     const { sendMessage, lastMessage } = useWebSocket("http://localhost:7006");

// //     const handleClick = () => {
// //       sendMessage('skill, WebSocket!');
// //     };

// //     return (
// //       <div>
// //         <button onClick={handleClick}>Send Message</button>
// //         <p>Last Message: {lastMessage ? lastMessage.data : 'None'}</p>
// //       </div>
// //     );
// //   };

// // export default WebSocketComponent;


import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";

const socket = io("http://localhost:5007"); // Ensure this matches the server port

const WebSocketComponent = () => {
  const [cricketData, setCricketData] = useState(null);

  useEffect(() => {
    socket.on("skill", (data) => {
      console.log("Received data from server: ", data);
      setCricketData(data.back); // Set the cricket data received
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.off("skill");
    };
  }, []);

  const submit = () => {
    socket.emit("skill", { msg: "Testing WebSocket" });
  };

  return (
    <div className="App">
      <button onClick={submit}>Test Button</button>
      {/* {cricketData && <h2>{JSON.stringify(cricketData)}</h2>} */}
    </div>
  );
};

export default WebSocketComponent;