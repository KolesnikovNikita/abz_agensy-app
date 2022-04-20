import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <nav className="AppNavigation">
          <img src="" alt="logo" />
          <span className="LogoName">testtask</span>
          <button className="Button NavButton">Users</button>
          <button className="Button NavButton">Sign up</button>
        </nav>
      </header>
      <div className="MainContainer">
        <div className="ImageContainer">
          <h1 className="MainPageHeader">
            Test assigment for front-end developer
          </h1>
          <p className="MainPageParagraph">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <button className="Button ContainerButton">Sign up</button>
        </div>
        <div className="UserList">
          <h1 className="MainPageHeader">Working with GET request</h1>
          <img src={"#"} alt="user-foto" />
          <p className="MainPageParagraph">User name</p>
          <p className="MainPageParagraph">Description of user and contacts</p>
        </div>
        <div className="ModalFormContainer">
          <h1 className="MainPageHeader">Working with POST request</h1>
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
              <p className="MainPageParagraph Checkbox">Select your position</p>

              <li>
                <input
                  type="checkbox"
                  className="VisuallyHidden CustomCheckBox"
                  name="position-input"
                  id="Frontend-form-input"
                  placeholder="Frontend developer"
                />
                <label htmlFor="Frontend-form-input">Frontend developer</label>
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
            <button className="SubmitButton">Upload</button>
            <input
              className="SubmitButton"
              type="text"
              value="Upload your photo"
            />
            <p className="MainPageParagraph">
              <button type="submit" className="Button SubmitButton">
                Sign up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
