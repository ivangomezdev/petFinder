import React from "react";
import { Link } from "react-router";
import "./sideButtons.css";

interface Props {
  props: any[];
}
const SideButtons = ({ props }: Props) => {
  const sideButtonMap = props.map((i) => {
    return (
      <button>
        <Link style={{ color: "white", textDecoration: "none" }} to={i.goTo}>
          {i.text}
        </Link>
      </button>
    );
  });
  return <div className={"side-buttons"}>{sideButtonMap}</div>;
};

export default SideButtons;
