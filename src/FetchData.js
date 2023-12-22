import { loremIpsum } from "lorem-ipsum";

const FetchData = ({ count, type }) => {
  const text = loremIpsum({
    count,
    units: type,
    format: "plain",
  });

  return <div className="container con bg-white mt-3">{text}</div>;
};

export default FetchData;
