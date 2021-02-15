import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './router'
import { createMuiTheme , ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
       fontFamily: [
            'Kanit'
       ]
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);