import './App.css';
import { Route, Routes } from 'react-router-dom';

import { AboutUs, Contact, Guarantee, SmartWatch, PhoneRepair, NotebookRepair, GlassRepair, LaptopRepair, FirstHelp, MainPage, BrandPhone, BrandLaptop, BrandNotebook } from './pages/index';
import { ModalConsultationComponent, ModalOrderComponent, Header, Footer } from './components/index'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/guarantee" element={<Guarantee />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/laptopRepair" element={<LaptopRepair />} />
        <Route path="/firstHelp" element={<FirstHelp />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/phoneRepair" element={<PhoneRepair />} />
        <Route path="/notebookRepair" element={<NotebookRepair />} />
        <Route path="/glass" element={<GlassRepair />} />
        <Route path="/smartWatch" element={<SmartWatch />} />
        <Route path="/order" element={<ModalOrderComponent />} />
        <Route path='/consultation' element={<ModalConsultationComponent />} />
        <Route path='/brandPhone' element={<BrandPhone />} />
        <Route path='/brandLaptop' element={<BrandLaptop />} />
        <Route path='/brandNotebook' element={<BrandNotebook />} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
