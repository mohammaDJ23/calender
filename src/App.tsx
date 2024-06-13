import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Calender from './components/calender';
import './index.css';

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Calender />}></Route>));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
