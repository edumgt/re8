import React from "react";

function BootstrapCard() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-img-top d-flex align-items-center justify-content-center bg-light" style={{ height: "180px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="currentColor"
          className="bi bi-image"
          viewBox="0 0 16 16"
        >
          <path d="M14.002 3a1 1 0 0 1 1 1v8.001a1 1 0 0 1-1 1H2.002a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 4v8h12V4H2z"/>
          <path d="M10.648 8.646a.5.5 0 0 1 .707 0l2.647 2.647V12H2v-.707l3.646-3.647a.5.5 0 0 1 .708 0L8 9.293l2.648-2.647z"/>
        </svg>
      </div>
      <div className="card-body">
        <h5 className="card-title">SVG 아이콘 카드</h5>
        <p className="card-text">Bootstrap Icons를 카드 이미지로 사용.</p>
        <a href="#" className="btn btn-primary">자세히 보기</a>
      </div>
    </div>
  );
}

export default BootstrapCard;
