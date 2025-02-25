const Navigation = () => {
  return (
    <nav>
        <div className="header">
            <div className="logo"> <img src="/images/logo.svg" alt="logo" /></div>
            <div className="headings">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navigation;