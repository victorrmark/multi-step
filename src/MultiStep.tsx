import { useState } from "react";
import ProgressPage from "./Forms/Progress";
import FirstStep from "./Forms/PersonalInfo";
import Plan from "./Forms/Plan";
import AddOns from "./Forms/AddOn";
import Summary from "./Forms/Sumary";
import Success from "./Forms/Success";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  plan: string;
  sub: string;
  addons: Record<string, boolean>;
};

type PriceData = {
  monthly: Record<string, number>;
  yearly: Record<string, number>;
};

const formData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  plan: "arcade",
  sub: "monthly",
  addons: {
    onlineService: false,
    largeStorage: false,
    customizeProfile: false,
  },
};

const priceData: PriceData = {
  monthly: {
    arcade: 9,
    advanced: 12,
    pro: 15,
    onlineService: 1,
    largeStorage: 2,
    customizeProfile: 2,
  },
  yearly: {
    arcade: 90,
    advanced: 120,
    pro: 150,
    onlineService: 10,
    largeStorage: 20,
    customizeProfile: 20,
  },
};

function MultiStep() {
  const [data, setData] = useState(formData);
  const [page, setPage] = useState(1);

  const updateField = (field: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...field };
    });
  };
  // const totalPages = 5

  function nextPage() {
    setPage((prev) => prev + 1);
  }

  function prevPage() {
    setPage((prev) => prev - 1);
  }

  function renderPage() {
    switch (page) {
      case 1:
        return (
          <FirstStep
            {...data}
            page={page}
            nextPage={nextPage}
            prevPage={prevPage}
            updateField={updateField}
          />
        );
        break;
      case 2:
        return (
          <Plan
            {...data}
            {...priceData}
            prevPage={prevPage}
            updateField={updateField}
            nextPage={nextPage}
          />
        );
        break;
      case 3:
        return (
          <AddOns
            {...data}
            {...priceData}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        );
        break;
      case 4:
        return (
          <Summary
            {...data}
            {...priceData}
            prevPage={prevPage}
            // data={data}
            setPage={setPage}
            nextPage={nextPage}
          />
        );
        break;
      case 5:
        return <Success />;
        break;
      default:
        return null;
    }
  }

  return (
    <div className="main">
      <div className="sub-main">
        <ProgressPage page={page} />
        {renderPage()}
      </div>
    </div>
  );
}

export default MultiStep;
