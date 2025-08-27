import React from "react";

function BootstrapButton() {
  return (
    <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      모달 열기
    </button>
  );
}

export default BootstrapButton;
