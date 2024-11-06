
import { createRoot } from 'react-dom/client'

import "./taillwind.css"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RouterApp from './Tools/router/RouterApp'
import { persistorsStore, store } from './Tools/store/store'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistorsStore}>
      <RouterApp />
  </PersistGate>
</Provider>
)
