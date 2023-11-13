import "../../styles/common-section.css";

const CommonSection = ({ title }) => {
  return (
    <div className="common__section">
      <div className="text-center ">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default CommonSection;
