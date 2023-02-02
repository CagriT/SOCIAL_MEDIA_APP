import "./leftBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { Link } from "react-router-dom";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="left">
        <Link to="/">cagrisocial</Link>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default LeftBar;
