import "./App.css";
import LogoIcon from "./img/Logo.svg";
import UserIcon from "./img/user/user_image.png";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="AppHeader">
          <nav className="AppNavigation">
            <div className="LogoDescriptionContainer">
              <img src={LogoIcon} />
              <div className="LogoContainer"></div>
              <span className="LogoName">testtask</span>
            </div>
            <div className="NavigationButtonContainer">
              <button className="Button NavButton">Users</button>
              <button className="Button NavButton">Sign up</button>
            </div>
          </nav>
        </header>
      </div>
      <div className="MainContainer">
        <div className="Hero">
          <div className="Container ImageContainer">
            <h1 className="MainPageHeader">
              Test assigment for front-end developer
            </h1>
            <p className="MainPageParagraph">
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </p>
            <button className="Button ContainerButton">Sign up</button>
          </div>
        </div>
        <div className="Container UserList">
          <h1 className="MainPageHeader TaskHeader">
            Working with GET request
          </h1>
          <div className="Container UserInfo">
            <img src={UserIcon} alt="user-photo" />
            <p className="UserName">Salvador Stewart Flynn Thomas...</p>
            <p className="UserData">
              frontend_develop@gmail.com +38 (098) 278 44 24
            </p>
          </div>
        </div>
        <div className="ModalFormContainer">
          <div className="Container">
            <h1 className="MainPageHeader RequestHeader">
              Working with POST request
            </h1>
            <form action="#" className="LoginForm" method="post">
              <ul className="GroupList">
                <li>
                  <input
                    type="text"
                    className="UserContacts"
                    name="name-input"
                    id="name-form-input"
                    placeholder="Your name"
                  />
                </li>
                <li className="UserOption UserInput">
                  <input
                    type="text"
                    className="UserContacts"
                    name="email-input"
                    id="email-form-input"
                    placeholder="Email"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    className="UserContacts"
                    name="phone-input"
                    id="phone-form-input"
                    placeholder="Phone"
                  />
                </li>
                <span className="PhonePattern">+38(xxx)xxx-xx-xx</span>
                <p className="MainPageParagraph Checkbox">
                  Select your position
                </p>

                <li>
                  <input
                    type="checkbox"
                    className="VisuallyHidden CustomCheckBox"
                    name="position-input"
                    id="Frontend-form-input"
                    placeholder="Frontend developer"
                  />
                  <label htmlFor="Frontend-form-input">
                    Frontend developer
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="VisuallyHidden CustomCheckBox"
                    name="position-input"
                    id="Backend-form-input"
                    placeholder="Backend developer"
                  />
                  <label htmlFor="Backend-form-input">Backend developer</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="VisuallyHidden CustomCheckBox"
                    name="position-input"
                    id="designer-form-input"
                    placeholder="Designer"
                  />
                  <label htmlFor="designer-form-input">Designer</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="VisuallyHidden CustomCheckBox"
                    name="position-input"
                    id="QA-form-input"
                    placeholder="QA"
                  />
                  <label htmlFor="QA-form-input">QA</label>
                </li>
              </ul>
              <button className="LoadButton">Upload</button>
              <input
                className="SearchInput"
                type="text"
                value="Upload your photo"
              />
              <p className="MainPageParagraph">
                <button type="submit" className="Button SignUpButton">
                  Sign up
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
