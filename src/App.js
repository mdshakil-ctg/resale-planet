import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';
import { Toaster } from 'react-hot-toast';


function App({children}) {
  return (
    <div className="App">
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
      <Toaster
       toastOptions={{
        className: '',
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: 'red',
          background: 'green',
        },
      }}      
      ></Toaster>
    </div>
  );
}

export default App;
