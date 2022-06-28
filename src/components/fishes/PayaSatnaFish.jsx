import React from "react";
import AmountSection from "./PartialFishes/AmountSection";
import PersonSection from "./PartialFishes/PersonSection";

import {
  DateTimeInput,
  DateTimeInputSimple,
  DateInput,
  DateInputSimple,
} from "react-hichestan-datetimepicker";

const PayaSatnaFish = ({ type }) => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div className="row border border-4 border-info rounded-3 p-1 p-md-4 m-0">
      <AmountSection />

      <PersonSection type={type} />

      <div className="row border border-primary rounded-3 p-1 m-0 mb-3">
        <h6>مشخصات حساب بانکی جهت واریز پایا/ساتنا</h6>

        <div className="col-sm-12 col-md-6 col-lg-4 my-3">
          <div className="form-group">
            <label> تاریخ موثر </label>
            <DateInput
              value={date}
              name={"myDateTime"}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4 my-3">
          <div className="form-group">
            <label htmlFor="fullName">شماره شبای حساب </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend order-2">
                <span className="input-group-text">IR</span>
              </div>
              <input
                className="form-control"
                type="number"
                placeholder="شماره شبای حساب"
                id="amount"
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-4 my-3">
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
    </div>
  );
};

export default PayaSatnaFish;
