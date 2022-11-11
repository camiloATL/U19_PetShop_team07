import React from "react";
import "./loading.css"

export default function Loading() {
  return (
    <div>
      <div
        className="spinner-border loading"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
}
