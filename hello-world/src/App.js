// package.json is the file which contains files and dependencies required to run the project and also the scripts to run, test, debug the project.
// node_modules is the folder where all the dependencies are installed and it is created when you run 'create-react-app' or 'npm-install'.
// This is ths html we see in the browser.

// When you run 'npm-start', 'index.html' is served in the browser, it contains 'root' DOM node, next the control enters 'index.js' , react component renders the App component on the 'root' DOM node, the App component contains the HTML which is ultimately displayed on the browser.

// In react 'component' represents the part of the User Interface and are building blocks of react-application. 
// Components are reusable with different values and information and can also contain other components.
// There are two components Functional Components and Class Components .

// Functional Components are someting which recieves 'props(properties) into the javascript function and returns the JSX.'

// Class Components are someting which recieves 'props(properties) into the ES6 classes and returns the JSX.'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App"> 
      <Greet name="MySQL" role="Database" /> {/* If there is no content between the tags , we can use self closing tags.*/}
      <Greet name="React" role="FrontEnd">
        <h1>Hello</h1>
      </Greet>
      <Greet name="Java" role="BackEnd"/>
      <Welcome name="MySQL" role="Database"/>
      <Welcome name="React" role="FrontEnd"/>
      <Hello />
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
    </div>
  );
}

export default App;
