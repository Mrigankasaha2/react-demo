import { createContext } from 'react';
import BasicAPICall from './components/BasicAPICall';
import CounterComponent from './components/CounterComponent';
import PassDataComponent from './components/PassDataComponent';
const moods = {
  Happy: '😀',
  Sad: '😢',
  Demo: 'Demo',
};
export const Moodcontext = createContext(moods);
function App() {
  return (
    <div className="p-16">
      <CounterComponent />
      <div className="flex flex-row justify-between">
        <Moodcontext.Provider value={moods.Demo}>
          <PassDataComponent name="Mriganka Saha" number="1234" />
          <PassDataComponent name="Somnath Roy" number="4567" />
          <PassDataComponent name="Test User" number="9999" />
        </Moodcontext.Provider>
      </div>
      <br />
      <BasicAPICall />
    </div>
  );
}

export default App;
