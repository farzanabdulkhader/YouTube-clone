/* eslint-disable react/prop-types */
function SidebarIcon({ sidebarLink }) {
  const { linkName, iconUrl } = sidebarLink;
  return (
    <div className="sidebar-link">
      <img src={iconUrl} alt={`${linkName}-icon`} />
      <div>{linkName}</div>
    </div>
  );
}

export default SidebarIcon;
