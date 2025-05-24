import React from "react";

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
};

const Modal = ({ children, onClose }) => {
  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        {children}
        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
