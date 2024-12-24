const Navigation = () => {
    return (
        <nav>
        <div className="logo">
            <img src="/images/brand_logo.svg" alt="logo" />
        </div>
        <div className="haedings">
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
        </div>
        <div className="login">
            <button>Login</button>
        </div>
       </nav>
    );
}

export default Navigation;