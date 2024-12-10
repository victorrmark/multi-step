export default function ProgressPage({ page }: { page: number }) {
  return (
    <div className="container">
      <div className="step">
        <span className={page === 1 ? "active pageNumber" : "pageNumber"}>
          1
        </span>
        <div className="step-des">
          <p>STEP 1</p>
          <p className="des">YOUR INFO</p>
        </div>
      </div>

      <div className="step">
        <span className={page === 2 ? "active pageNumber" : "pageNumber"}>
          2
        </span>
        <div className="step-des">
          <p>STEP 2</p>
          <p className="des">SELECT PLAN</p>
        </div>
      </div>

      <div className="step">
        <span className={page === 3 ? "active pageNumber" : "pageNumber"}>
          3
        </span>
        <div className="step-des">
          <p>STEP 3</p>
          <p className="des">ADD-ONS</p>
        </div>
      </div>

      <div className="step">
        <span className={page === 4 || page === 5 ? "active pageNumber" : "pageNumber"}>
          4
        </span>
        <div className="step-des">
          <p>STEP 4</p>
          <p className="des">SUMMARY</p>
        </div>
      </div>

    </div>
  );
}
