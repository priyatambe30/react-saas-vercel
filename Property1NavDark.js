
import { useMemo } from "react";
// import Logo from "./Logo";
import "./Property1NavDark.css";
import LogoDefault from "./LogoDefault";

const Property1NavDark = ({
  property1NavDarkWidth,
  property1NavDarkBackgroundColor,
  property1NavDarkGap,
}) => {
  const property1NavDarkStyle = useMemo(() => {
    return {
      width: property1NavDarkWidth,
      backgroundColor: property1NavDarkBackgroundColor,
      gap: property1NavDarkGap,
    };
  }, [
    property1NavDarkWidth,
    property1NavDarkBackgroundColor,
    property1NavDarkGap,
  ]);

  return (
    <div className="property-1navdark" style={property1NavDarkStyle}>
      {/* <Logo /> */}
      <LogoDefault/>
      <div className="stack3">
        <div className="about">About</div>
        <div className="about">Features</div>
        <div className="about">Customers</div>
        <div className="about">Updates</div>
        <div className="about">Help</div>
        <div className="buttons">
          <div className="get-for-free">Get for free</div>
        </div>
      </div>
    </div>
  );
};

export default Property1NavDark;
