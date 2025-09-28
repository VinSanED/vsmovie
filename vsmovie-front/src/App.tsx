import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Listing } from 'pages/Listing/listInd';
import { Forme } from 'pages/Form/formInd';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Listing/>}/>

            <Route path='/form' >
                <Route path=':moveId' element={<Forme/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
