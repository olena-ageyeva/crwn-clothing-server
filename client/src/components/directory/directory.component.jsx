import React from "react";
import { useSelector } from "react-redux";
import { selectSections } from "../../store/directory/directory.reducer";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = () => {
  const sections = useSelector(selectSections);

  return (
    <div className="directory-menu">
      {sections.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Directory;
