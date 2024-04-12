import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ImportCSV from './window/ImportCSV';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FluentProvider theme={teamsLightTheme}>
      <BrowserRouter>
            <Routes>
              <Route index element={<App />}/>
              <Route path="importcsv" element={<ImportCSV/>} />
            </Routes>
      </BrowserRouter>
    </FluentProvider>
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})

