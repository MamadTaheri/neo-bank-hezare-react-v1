import React from "react";

const AccountSection = ({ type }) => {
  return (
    <div className="row border border-primary rounded-3 p-1 m-0 mb-3">
      <h6>
        {type === 0 || type === 2 || type === 3
          ? "مشخصات حساب جهت واریز بانکی"
          : "مشخصات حساب جهت برداشت بانکی"}
      </h6>

      <div className="col-sm-12 col-md-6 col-lg-6 my-3">
        <div className="form-group">
          <label> شماره حساب یا کارت </label>
          <input
            className="form-control"
            type="number"
            placeholder="  شماره حساب یا کارت خود را وارد کنید "
          />
        </div>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-6 my-3">
        <div className="form-group">
          <label>نام صاحب حساب</label>
          <input
            className="form-control"
            type="text"
            placeholder="نام صاحب حساب  را وارد کنید"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
