import { useState } from "react";
import "../assets/style/form.css";

type UserData = {
  fullName: string;
  email: string;
  phone: string;
};
type FirstStepProp = UserData & {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  updateField: (field: Partial<UserData>) => void;
};

function FirstStep({
  fullName,
  email,
  phone,
  page,
  nextPage,
  prevPage,
  updateField,
}: FirstStepProp) {

  const [error, SetError] = useState({name: false, email: false, tel: false})

  const validateInput = (): boolean => {
    const isNameValid = fullName === "";
    const isMailValid = email === "" || !email.includes("@");
    const isTelValid = phone === "";
    SetError({name: isNameValid, email: isMailValid, tel: isTelValid})

    return !isNameValid && !isMailValid && !isTelValid

  };

  const goNext = ():void =>{
    if (validateInput()) {
      nextPage()
    }
  }

  return (
    <div className="formContainer">
      <div className="sub-container">
        <form>
          <h2>Personal info</h2>
          <p className="description">
            Please provide your name, email address, and phone number.
          </p>
          <div className="form_group">
            <label>
              Name
              {error.name && <span>This field is required</span>}
            </label>
            <input
              className={error.name ? "invalid" : ""}
              autoFocus
              type="text"
              placeholder="e.g. Stephen King"
              value={fullName}
              onChange={(e) => updateField({ fullName: e.target.value })}
            />
          </div>
          <div className="form_group">
            <label>
              Email Address
              {error.email && <span>This field is required</span>}
            </label>
            <input
              type="email"
              className={error.email ? "invalid" : ""}
              placeholder="e.g. stephenking@lorem.com"
              value={email}
              onChange={(e) => updateField({ email: e.target.value })}
            />
          </div>
          <div className="form_group">
            <label>
              Phone Number
              {error.tel && <span>This field is required</span>}
            </label>
            <input
              type="tel"
              className={error.tel ? "invalid" : ""}
              placeholder="e.g. +1 234 567 890"
              value={phone}
              onChange={(e) => updateField({ phone: e.target.value })}
            />
          </div>
        </form>
      </div>
      <div className="buttons">
        {page > 1 && (
          <button className="back" onClick={prevPage}>
            Go Back
          </button>
        )}
        <button className="next" onClick={goNext}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default FirstStep;
