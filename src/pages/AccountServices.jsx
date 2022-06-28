import React from "react";
import Swal from "sweetalert2";
import accountServiceTypes from "../data/accountServiceTypes";

const AccountServices = () => {
  const showAlert = (text) => {
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="row ">
      <div className="row justify-content-center">
        <div className="col-md-9 text-center">سرویس های حساب</div>
      </div>

      <div className="row">
        {accountServiceTypes.map((q) => (
          <div className="col-6 col-md-4 col-lg-3 col-xl-2 " key={q}>
            <div className="custom-card" onClick={() => showAlert(q)}>
              {q}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountServices;
