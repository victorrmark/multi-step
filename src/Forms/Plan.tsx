import { useEffect, useState } from "react";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import "../assets/style/plan.css";

type UserData = {
  plan: string;
  sub: string;
};

type PlanProps = UserData & {
  monthly: Record<string, number>;
  yearly: Record<string, number>;
  prevPage: () => void;
  nextPage: () => void;
  updateField: (field: Partial<UserData>) => void;
};

export default function Plan({
  sub,
  plan,
  monthly,
  yearly,
  prevPage,
  nextPage,
  updateField,
}: PlanProps) {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    if (sub === "monthly") {
      setIsToggled(false);
    } else {
      setIsToggled(true);
    }
  }, [sub]);

  const handleToggle = () => {
    const toggleStatus = !isToggled;
    setIsToggled(toggleStatus);
    if (isToggled === false) {
      updateField({ sub: "yearly" });
    } else {
      updateField({ sub: "monthly" });
    }
  };

  const handleBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateField({ plan: event.target.value });
  };

  return (
    <div className="formContainer">
      <div className="sub-container">
        <form>
          <h2>Select your plan</h2>
          <p className="description">
            You have the option of monthly or yearly billing.
          </p>

          <div className="check-container">
            <input
              type="radio"
              id="arcade"
              name="selectPlan"
              value="arcade"
              checked={plan === "arcade"}
              onChange={handleBoxChange}
              className="box"
            />
            <label htmlFor="arcade" className="box-label">
              <img src={arcadeIcon} alt="" className="icon" />
              <div className="plan-des">
                <h3>Arcade</h3>
                {sub === "monthly" && <p>${monthly.arcade}/mo</p>}
                {sub === "yearly" && (
                  <div>
                    <p>${yearly.arcade}/mo</p>
                    <p className="promo">2 months free</p>
                  </div>
                )}
              </div>
            </label>

            <input
              type="radio"
              id="advanced"
              name="selectPlan"
              value="advanced"
              checked={plan === "advanced"}
              onChange={handleBoxChange}
              className="box"
            />
            <label htmlFor="advanced" className="box-label">
              <img src={advancedIcon} alt="" className="icon" />
              <div className="plan-des">
                <h3>Advanced</h3>
                {sub === "monthly" && <p>${monthly.advanced}/mo</p>}
                {sub === "yearly" && (
                  <div>
                    <p>${yearly.advanced}/mo</p>
                    <p className="promo">2 months free</p>
                  </div>
                )}
              </div>
            </label>

            <input
              type="radio"
              id="pro"
              name="selectPlan"
              value="pro"
              checked={plan === "pro"}
              onChange={handleBoxChange}
              className="box"
            />
            <label htmlFor="pro" className="box-label">
              <img src={proIcon} alt="" className="icon" />
              <div className="plan-des">
                <h3>Pro</h3>
                {sub === "monthly" && <p>${monthly.pro}/mo</p>}
                {sub === "yearly" && (
                  <div>
                    <p>${yearly.pro}/mo</p>
                    <p className="promo">2 months free</p>
                  </div>
                )}
              </div>
            </label>
          </div>

          <div className="billing-container">
            <p className={isToggled ? "" : "checked"}>Monthly</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={isToggled}
                onChange={handleToggle}
              />
              <span className="slider"></span>
            </label>
            <p className={isToggled ? "checked" : ""}>Yearly</p>
          </div>
        </form>
      </div>

      <div className="buttons">
        <button className="back" onClick={prevPage}>
          Go Back
        </button>
        <button className="next" onClick={nextPage}>
          Next Step
        </button>
      </div>
    </div>
  );
}
