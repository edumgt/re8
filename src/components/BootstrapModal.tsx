import React from "react";

function BootstrapModal() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">모달 제목</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="닫기"></button>
          </div>
          <div className="modal-body">
            모달 내용입니다.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button type="button" className="btn btn-primary">저장</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default BootstrapModal;