import { useState } from "react";
import "../assets/style/addons.css";

type UserData = {
  sub: string;
  addons: Record<string, boolean>;
};

type AddOnProp = UserData & {
  nextPage: () => void;
  prevPage: () => void;
};

export default function AddOns({
  addons,
  sub,
  nextPage,
  prevPage,
}: AddOnProp) {

  const [checkedOptions, setCheckedOptions] = useState<{
    [key: string]: boolean;
  }>({
    onlineService: false,
    largeStorage: false,
    customizeProfile: false,
  });



  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedOptions((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    addons[name] = checked
    console.log(checkedOptions)

  };

  return (
    <div className="formContainer">
      <div className="sub-container">
        <form>
          <h2>Pick add-ons</h2>
          <p className="description">
            Add-ons help ehance your gaming experience.
          </p>
          <div className="box-container">

            <label 
              htmlFor="onlineService"
              className={`checkbox-container ${addons.onlineService ? "checked" : ""}`}
            >
              <input type="checkbox" 
                id="onlineService"
                name="onlineService"
                checked={addons.onlineService}
                onChange={handleCheckboxChange}
                className="checkbox"
              />
              <span className="checkmark"></span>
              <div className="addon-des">
                <div>
                  <h3>Online service</h3>
                  <p>Access to multiplayer games</p>
                </div>
                {sub==='yearly' && <p className="toend">+$10/yr</p>}
                {sub==='monthly' && <p className="toend">+$1/mo</p>}
              </div>
            </label>

            <label 
              htmlFor="largeStorage"
              className={`checkbox-container ${addons.largeStorage ? "checked" : ""}`}
            >
              <input type="checkbox" 
                id="largeStorage"
                name="largeStorage"
                checked={addons.largeStorage}
                onChange={handleCheckboxChange}
                className="checkbox"
              />
              <span className="checkmark"></span>
              <div className="addon-des">
                <div>
                  <h3>Larger storage</h3>
                  <p>Extra 1TB of cloud save</p>
                </div>
                {sub==='yearly' && <p className="toend">+$20/yr</p>}
                {sub==='monthly' && <p className="toend">+$2/mo</p>}
              </div>
            </label>

            <label 
              htmlFor="customizeProfile"
              className={`checkbox-container ${addons.customizeProfile ? "checked" : ""}`}
            >
              <input type="checkbox" 
                id="customizeProfile"
                name="customizeProfile"
                checked={addons.customizeProfile}
                onChange={handleCheckboxChange}
                className="checkbox"
              />
              <span className="checkmark"></span>
              <div className="addon-des">
                <div>
                  <h3>Customizable Profile</h3>
                  <p>Custom theme on your profile</p>
                </div>
                {sub==='yearly' && <p className="toend">+$20/yr</p>}
                {sub==='monthly' && <p className="toend">+$2/mo</p>}
              </div>
            </label>

            
          </div>
        </form>
      </div>
      <div className="buttons">
        <button className="back" onClick={prevPage}>
          Go Back
        </button>

        <button className="next" onClick={nextPage}>Next Step</button>
      </div>
    </div>
  );
}
