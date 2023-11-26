import SidebarIcon from "./SidebarIcon";

const sidebarLinks = [
  {
    linkName: "Home",
    iconUrl: "./icons/home.svg",
  },

  {
    linkName: "Shorts",
    iconUrl: "./icons/youtube-apps.svg",
  },
  {
    linkName: "Subscriptions",
    iconUrl: "./icons/subscriptions.svg",
  },
  {
    linkName: "History",
    iconUrl: "./icons/history.svg",
  },
  {
    linkName: "Watch Later",
    iconUrl: "./icons/watch-later.svg",
  },
  {
    linkName: "Liked Videos",
    iconUrl: "./icons/like.svg",
  },
  {
    linkName: "Trending",
    iconUrl: "./icons/trending.svg",
  },
  {
    linkName: "Shopping",
    iconUrl: "./icons/shopping.svg",
  },
  {
    linkName: "Movies",
    iconUrl: "./icons/movies.svg",
  },
  {
    linkName: "Trending",
    iconUrl: "./icons/trending.svg",
  },
];

function SidebarIcons() {
  return (
    <>
      {sidebarLinks.map((sidebarLink, i) => (
        <SidebarIcon sidebarLink={sidebarLink} key={i} />
      ))}
    </>
  );
}

export default SidebarIcons;
