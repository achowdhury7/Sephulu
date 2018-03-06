import React from'react'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { App }  from './containers'
import configureStore from './store'

const rootEl = document.getElementById('root')
const store = configureStore()

const renderClient = () => 
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>        
    </AppContainer>,
    rootEl    
  )

  const init = () => renderClient()

  if (module.hot) {
    module.hot.accept('./containers/App', () => renderClient())
  }

  init()
  