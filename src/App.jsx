import { createContext } from 'react';
import BasicAPICall from './components/BasicAPICall';
import CounterComponent from './components/CounterComponent';
import PassDataComponent from './components/PassDataComponent';
import Header from './components/Header';
import FormSubmit from './components/FormSubmit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const moods = {
  Happy: '😀',
  Sad: '😢',
  Demo: 'Demo',
};
export const Moodcontext = createContext(moods);
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BasicAPICall />} />
          <Route path="/forms" element={<FormSubmit />} />
          <Route path="*" element={<BasicAPICall />} />
        </Routes>
      </BrowserRouter>
      <div className="p-16">
        <CounterComponent />
        <div className="flex flex-row justify-between">
          <Moodcontext.Provider value={moods.Demo}>
            <PassDataComponent name="Mriganka Saha" number="1234" />
            <PassDataComponent name="Somnath Roy" number="4567" />
            <PassDataComponent name="Test User" number="9999" />
          </Moodcontext.Provider>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
