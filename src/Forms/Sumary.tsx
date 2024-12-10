import "../assets/style/summary.css";

type UserData = {
  plan: string;
  sub: string;
};

type SummaryProps = UserData & {
  addons: Record<string, boolean>;
  monthly: Record<string, number>;
  yearly: Record<string, number>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  prevPage: () => void;
  nextPage: () => void;
};

export default function Summary({
  sub,
  plan,
  addons,
  monthly,
  yearly,
  setPage,
  prevPage,
  nextPage,
}: SummaryProps) {
  const capitalize = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  const prices = () => {
    if (sub === "monthly") {
      return monthly[plan];
    } else {
      return yearly[plan];
    }
  };

  const addonPrices = (addon: string) => {
    if (sub === "monthly") {
      return monthly[addon];
    } else {
      return yearly[addon];
    }
  };


  const getPrices = () => {
    const arrOfPrices: [number, number, number] = [0, 0, 0];

    if (sub === "monthly" && addons.onlineService) {
      arrOfPrices[0] = monthly.onlineService;
    } else if (sub === "yearly" && addons.onlineService) {
      arrOfPrices[0] = yearly.onlineService;
    } else {
      arrOfPrices[0] = 0;
    }

    if (sub === "monthly" && addons.largeStorage) {
      arrOfPrices[1] = monthly.largeStorage;
    } else if (sub === "yearly" && addons.largeStorage) {
      arrOfPrices[1] = yearly.largeStorage;
    } else {
      arrOfPrices[1] = 0;
    }

    if (sub === "monthly" && addons.customizeProfile) {
      arrOfPrices[2] = monthly.customizeProfile;
    } else if (sub === "yearly" && addons.customizeProfile) {
      arrOfPrices[2] = yearly.customizeProfile;
    } else {
      arrOfPrices[2] = 0;
    }

    return arrOfPrices;
  };

  const addUp = () => {
    const price = prices()
    return getPrices().reduce((total, num) => total + num, price)
  };

  function goto() {
    setPage(2);
  }

  return (
    <div className="formContainer">
      <div className="sub-container">
        <form>
          <h2>Finishing Up</h2>
          <p className="description">
            Double-check everything looks OK before confirming.
          </p>
          <div className="double-check">
            <div className="summary">
              <h4>
                {capitalize(plan)} ({capitalize(sub)})
              </h4>
              <div className="prices">
                <a href="#" onClick={goto}>
                  Change
                </a>
                <h4>
                  ${prices()}/{sub === "monthly" ? "mo" : "yr"}
                </h4>
              </div>
            </div>
            <hr />
            <div className="addon-prices">
              {addons.onlineService && (
                <div className="prices">
                  <p>Online Service</p>
                  <p>
                    +${addonPrices("onlineService")}/
                    {sub === "monthly" ? "mo" : "yr"}
                  </p>
                </div>
              )}
              {addons.largeStorage && (
                <div className="prices">
                  <p>Larger storage</p>
                  <p>
                    +${addonPrices("largeStorage")}/
                    {sub === "monthly" ? "mo" : "yr"}
                  </p>
                </div>
              )}
              {addons.customizeProfile && (
                <div className="prices">
                  <p>Customizable profile</p>
                  <p>
                    +${addonPrices("customizeProfile")}/
                    {sub === "monthly" ? "mo" : "yr"}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="total">
            <p>Total({sub === "monthly" ? "per month" : "per year"})</p>
            <p className="g-total">+${addUp()}/{sub === "monthly" ? "mo" : "yr"}</p>
          </div>
        </form>
      </div>

      <div className="buttons">
        <button className="back" onClick={prevPage}>
          Go Back
        </button>
        <button className="next" onClick={nextPage}>
          Confirm
        </button>
      </div>
    </div>
  );
}
