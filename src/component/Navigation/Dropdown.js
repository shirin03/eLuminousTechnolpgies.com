import MenuItems from "./MenuItems";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  console.log("===>", submenus);

  return (
    // <div style={{width:"100%",backGroundColor:"yellow",height:"200px",position:"relative",}}>
    <tr style={{ position: "absolute", left: "-100px", top: "0px" }}>
      <ul
        className={`dropdownMenu ${dropdownClass} ${dropdown ? "show" : ""}`}
        style={{ width: "1200px" }}
      >
        {submenus.map((submenu, index) =>
          submenu.nestMenu ? (
            <td>
              <button type="button">{submenu.title}</button>

              {submenu.nestMenu.map((item, ind) => (
                <MenuItems items={item} key={ind} depthLevel={depthLevel} />
              ))}
            </td>
          ) : (
            <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
          )
        )}
      </ul>
    </tr>
    // </div>
  );
};

export default Dropdown;
