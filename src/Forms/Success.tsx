import thankYou from "../assets/images/icon-thank-you.svg";


export default function Success() {
  return (
    <div className="formContainer success">
      <div className="sub-container">
        <div className="message">
            <img src={thankYou} alt="" className="icon"/>
          <h2>Thank You!</h2>
          <p className="description">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
}
