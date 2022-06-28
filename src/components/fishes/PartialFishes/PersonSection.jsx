import React from "react";

const PersonSection = ({type}) => {
  return (
    <div className="row border border-primary rounded-3 p-1 m-0 mb-3">
      <h6> اطلاعات شخصی</h6>

      <div className="col-sm-12 col-md-6 col-lg-4 my-3">
        <div className="form-group">
          <label htmlFor="fullName"> نام و نام خانوادگی </label>
          <input
            className="form-control"
            type="text"
            id="fullName"
            placeholder="نام و نام خانوادگی خود را وارد کنید "
          />
        </div>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-4 my-3">
        <div className="form-group">
          <label htmlFor="ssn"> کد ملی/شماره اتباع خارجی </label>
          <input
            className="form-control"
            type="number"
            id="ssn"
            placeholder="کد ملی/شماره اتباع خارجی خود را وارد کنید "
          />
        </div>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-4 my-3">
        <div className="form-group">
          <label htmlFor="phone"> شماره تماس </label>
          <input
            className="form-control"
            type="text"
            id="phone"
            placeholder="شماره تماس خود را وارد کنید "
          />
        </div>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-8 my-3">
        <div className="form-group">
          <label htmlFor="address"> آدرس </label>
          <input
            className="form-control"
            type="text"
            id="address"
            placeholder="آدرس  خود را وارد کنید "
          />
        </div>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-4 my-3">
        <div className="form-group">
          <label htmlFor="zipCode"> کد پستی </label>
          <input
            className="form-control"
            type="number"
            id="zipCode"
            placeholder="کد پستی خود را وارد کنید "
          />
        </div>
      </div>
    </div>
  );
};

export default PersonSection;
