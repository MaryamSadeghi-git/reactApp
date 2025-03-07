import { useState } from "react";
import { Link } from "react-router";
import "../CSS/SideBar.css";
import "boxicons";
const SideBar = () => {
  const [toggle, setToggle] = useState(null);
  return (
    <>
      <button className="oc" onClick={() => setToggle(!toggle)}>
        <box-icon name="menu"></box-icon>
      </button>
      <div className="sidebar " style={{ width: toggle && "50vw" }}>
        <Link to="/reactApp/add">Add</Link>
        <Link to={"/reactApp"}>Data</Link>
      </div>
    </>
  );
};
export default SideBar;
