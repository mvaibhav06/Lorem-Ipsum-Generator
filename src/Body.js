import { useState } from "react";
// import { LoremIpsum } from "react-lorem-ipsum";
import { loremIpsum } from "lorem-ipsum";

const Body = () => {
  const [number, setNumber] = useState(1);
  const [option, setOption] = useState("paragraphs");

  const [data, setData] = useState("");

  const handleGenerate = () => {
    let text = "";
    if (option === "paragraphs") {
      for (let i = 0; i < number; i++) {
        const paragraph = loremIpsum({
          count: number,
          units: "sentences",
          format: "plain",
        });
        text += paragraph + "\n\n";
      }
    } else {
      text = loremIpsum({
        count: number,
        units: option,
        format: "plain",
      });
    }
    setData(text);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(data);
    alert("Copied to the clipboard!!!");
  };

  const handleOptions = (e) => {
    setOption(e.target.value);
  };

  const handleNumber = (e) => {
    if (e.target.value <= 1) {
      setNumber(1);
    } else {
      setNumber(e.target.value);
    }
  };

  return (
    <>
      <div className="container row mt-2 body">
        <div className="col-1">
          <input
            value={number}
            onChange={handleNumber}
            type="number"
            className="form-control number"
          />
        </div>

        <div className="col-3">
          <select
            value={option}
            onChange={handleOptions}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="paragraphs">Paragraphs</option>
            <option value="sentences">Sentences</option>
            <option value="words">Words</option>
          </select>
        </div>

        <div className="col-1 buttons">
          <button onClick={handleGenerate} className="btn btn-secondary">
            GENERATE!
          </button>
        </div>
        <div className="col-1">
          <button onClick={handleCopy} className="btn btn-secondary">
            Copy
          </button>
        </div>
      </div>

      <div className="container con bg-white mt-3">
        {/* <LoremIpsum p={number} /> */}

        {data}
      </div>
    </>
  );
};

export default Body;
