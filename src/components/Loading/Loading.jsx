import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        position: "relative",
        Width: "100vw",
        height: "100vh",
        background: "#000",
      }}
    >
      <img
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "99",
        }}
        src="https://media4.giphy.com/media/3oriOiizS4Pmofj46A/200w.webp?cid=ecf05e474rdj0lsrbus9mbgwp0nr7sifbx7sqz6yus1ils0m&rid=200w.webp&ct=g"
      />
    </div>
  );
};

export default Loading;
