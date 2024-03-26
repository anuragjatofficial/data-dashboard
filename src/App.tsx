import BaseComponent from './components/BaseComponent';
import SubCategory from './components/SubCategory';
import FundContribution from './components/FundContribution';
import TopSectorComponent from './components/TopSectorComponent';

function App() {
  return (
    <div className="App w-[100vw] h-[100vh]  flex bg-[#f3f3f3f3] gap-7 justify-center items-center">
      <BaseComponent/>
      <SubCategory/>
      <FundContribution/>
      <TopSectorComponent/>
    </div>
  );
}

export default App;
