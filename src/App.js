import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routers/Routes';

function App() {
  return (
    <div className='h-[100vh] w-[100vw] bg-gray-200'>
    <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
