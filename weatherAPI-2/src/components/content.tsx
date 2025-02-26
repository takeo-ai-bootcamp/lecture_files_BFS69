function Content() {
  return (
    <div className="content_wrapper">
      <div className="content_container">
        <div className="temperature">
          <p>23 C</p>
        </div>
        <div className="location">
          <p>Pokhara</p>
        </div>
        <div className="high_and_low">
          <div className="high">
            <p>High: 34 C</p>
          </div>
          <div className="low">
            <p>Low: 34 C</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
