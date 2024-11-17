import styles from "./App.module.scss";
import { useState, useEffect } from "react";
// import HelpText from './components/HelpText/HelpText'
function App() {
  const [isAlert, setIsAlert] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const handleAlert = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsAlert(false);
    }, 500);
  };

  useEffect(() => {
    if (isAlert) {
      setIsVisible(true);
    }
  }, [isAlert]);
  return (
    <>
      {isAlert && (
        <div className={styles.customModalOverlay}>
          <div
            className={`${styles.customModalContent} ${
              isVisible ? styles.slideDown : styles.slideUp
            }`}
            role="dialog"
          >
            <div
              className={`${styles.customContentModal} modal modal-content fw-semibold fs-5`}
            >
              <div className="modal-body">
                <div className="h-5 mb-0">
                  Note: You are opening the QA version.
                  <br />
                  Please use{" "}
                  <a
                    className="text-decoration-none fw-semibold"
                    href="https://reba.cat.com"
                  >
                    reba.cat.com
                  </a>{" "}
                  for the production version.
                </div>
              </div>
              <div className="modal-footer p-1">
                <button
                  onClick={handleAlert}
                  type="button"
                  className="btn btn-primary btn-ok px-4"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="d-flex m-auto justify-content-center align-items-center">
        <div className="w-50 bg-dark text-light mx-2"> Box 1</div>
        <div className="w-50 bg-dark text-light mx-2"> Box 2</div>
        <div className="w-50 bg-dark text-light mx-2"> Box 3</div>
        <div className="w-50 bg-dark text-light mx-2"> Box 4</div>
        <div className="w-50 bg-dark text-light mx-2"> Box 5</div>
      </div>
    </>
  );
}

export default App;
