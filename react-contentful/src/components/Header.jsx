import logo from '../logo.svg';

const Header = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1> React + Contentful </h1>
            </header>
        </div>
    )
}

export default Header
