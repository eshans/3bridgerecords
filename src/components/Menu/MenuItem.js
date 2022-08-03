import React, { useState } from "react";

const MenuItem = ({ item }) => {
  const [isSubMenuShow, setIsSubMenuShow] = useState(false);

  return (
    <div className="item">
      <a href={item.url}>
        <div onMouseOver={() => setIsSubMenuShow(!isSubMenuShow)}>
          {item.menuname}
        </div>
      </a>
      {item.submenu && isSubMenuShow && <SubMenu dropDownItem={item.submenu} />}
    </div>
  );
};

const SubMenu = ({ dropDownItem }) => {
  return (
    <div className="drop-down">
      <ul classNane="submenu">
        {dropDownItem.map((item) => {
          return (
            <a href={item.url}>
              <li key={item.submenuname}>{item.submenuname}</li>
            </a>
          )
        })}
      </ul>
    </div>
  );
};

export default MenuItem;
