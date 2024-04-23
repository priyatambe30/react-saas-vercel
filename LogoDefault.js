import { useMemo } from "react";
import "./LogoDefault.css";

const LogoDefault = ({ logosaas, logoDefaultPosition }) => {
  const logoDefaultStyle = useMemo(() => {
    return {
      position: logoDefaultPosition,
    };
  }, [logoDefaultPosition]);

  return (
    <div className="logodefault1" style={logoDefaultStyle}>
      <div className="logodefault-item" />
      <img className="logosaas-icon1" alt="" src={logosaas} />
    </div>
  );
};

export default LogoDefault;
