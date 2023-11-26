function HeaderIcons() {
  return (
    <div className="right-section">
      <div className="upload-icon-container">
        <img className="upload-icon" src="./icons/upload.svg" />
        <div className="tooltip">Create</div>
      </div>
      <div className="notifications-icon-container">
        <img className="notifications-icon" src="./icons/notifications.svg" />
        <div className="notifications-count">3</div>
        <div className="tooltip">Notifications</div>
      </div>
      <img
        className="current-user-picture"
        src="./thumbnails/my-channel.jpeg"
      />
    </div>
  );
}

export default HeaderIcons;
