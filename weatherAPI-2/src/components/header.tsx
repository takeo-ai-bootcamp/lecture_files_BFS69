const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://web-pages-assets.s3.amazonaws.com/images/logo-online/Icon-graphic-ADVANTAGES.png" />
      </div>
      <div className="action_button">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>{" "}
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
