import { Routes , Route } from "react-router-dom";
import SignUpPage from './component/SignUpPage'
import LoginPage from './component/LoginPage'
import HelloPage from './component/HelloPage'

function App() {
  return (
    <Routes>
        <Route path='/' element ={<SignUpPage /> } />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/hello' element={<HelloPage />} />
    </Routes>
  );
}

export default App;
