import BackgroundAnimation from './Components/BackgroundAnimation';
import InputShortener from './Components/InputShortener';
import LinkResult from './Components/LinkResult';

function App() {
  return (
    <div className="container">
      <InputShortener />
      <BackgroundAnimation />
      <LinkResult />
    </div>
  );
}

export default App;
