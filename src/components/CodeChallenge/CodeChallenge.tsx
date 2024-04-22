import "./CodeChallenge.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import ConfettiExplosion from "react-confetti-explosion";

function CodeChallenge() {
  const challengeAnswer =
    "functionfindLargestNumber(numbers){letlargest=0;for(leti=0;i<numbers.length;i++){if(numbers[i]>largest){largest=numbers[i];}}returnlargest;}";
  const initialState =
    "function findLargestNumber(numbers) {\n    let largest = 0;\n    for (let i = 0; i < numbers.length; i++) {\n        if (numbers[i] < largest) {\n            largest = numbers[i];\n        }\n    }\n    return largest;\n}";
  const [code, setCode] = useState(initialState);
  const [isExploding, setIsExploding] = useState(false);
  const [isWrongCode, setIsWrongCode] = useState(false);

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (code.replace(/\s/g, "") === challengeAnswer) {
      setIsExploding(true);
      setIsWrongCode(false);
    } else {
      setIsWrongCode(true);
      // After 0.5 seconds, reset isWrongCode back to false
      setTimeout(() => {
        setIsWrongCode(false);
      }, 500);
    }
  };

  const handleReset = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsExploding(false);
    setCode(initialState);
    setIsWrongCode(false);
  };

  return (
    <div style={{ paddingRight: 10, paddingLeft: 10 }}>
      <span style={{ color: "lightgreen", fontSize: "14px" }}>
        {`//Fix the function for a confetti explosion!😄`}
      </span>
      <Form className={`styled-code-block ${isWrongCode ? "wiggle" : ""}`}>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows={9}
            size="sm"
            className="styled-code-block"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
          />
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {isExploding && (
              <ConfettiExplosion particleCount={100} duration={3000} />
            )}
          </div>
        </Form.Group>
      </Form>
      <div className="button-container">
        <button onClick={handleReset} className="reset-button">
          Reset Code
        </button>
        <button onClick={handleSubmit} className="attempt-button">
          Run Code
        </button>
      </div>
    </div>
  );
}

export default CodeChallenge;
