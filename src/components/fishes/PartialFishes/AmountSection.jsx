import React from "react";
import Num2persian from 'num2persian';

const AmountSection = () => {
  const [amount, setAmount] = React.useState(0);

  return (
    <div className="row border border-primary rounded-3 p-1 m-0 mb-3">
      <div className="col-sm-12 col-md-4 col-lg-3 my-3">
        <div className="form-group">
          <label htmlFor="fullName"> مبلغ (عدد) </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend order-2">
              <span className="input-group-text">ریال</span>
            </div>
            <input
              className="form-control"
              type="number"
              placeholder="مبلغ"
              id="amount"
              value={amount}
              onFocus={() => setAmount("")}
              onChange={(e) => setAmount(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-8 col-lg-9 my-3">
        <div className="form-group">
          <label> مبلغ نهایی </label>
          <div style={{backgroundColor:"rgb(233, 236, 239)"}} className="form-control">
            {Num2persian(amount) + " ریال"}</div>
        </div>
      </div>
    </div>
  );
};

export default AmountSection;
