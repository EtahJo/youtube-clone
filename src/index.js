import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProvider from './context/catContext';
import SideBarProvider from './context/sidebarContext';
import ThemeProvider from './context/appearanceContext';
import LanguageProvider from './context/languageContext';
import RestrictedProvider from './context/restrictedContext';
import DataContextProvider from './context/displayDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SideBarProvider>
      <ContextProvider>
        <ThemeProvider>
          <LanguageProvider>
            <RestrictedProvider>
              <DataContextProvider>
              <App />
              </DataContextProvider>
             
            </RestrictedProvider>
          </LanguageProvider>
        </ThemeProvider>
      </ContextProvider>
    </SideBarProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
