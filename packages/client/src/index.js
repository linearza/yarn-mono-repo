import m from 'mithril'

const root = document.getElementById('app')

const config = {
  apiUrl: 'http://localhost:3000/api'
}

const App = {
  value: '',
  fetchValue: () => {
    m.request({
      method: 'GET',
      url: `${config.apiUrl}/value`
    })
    .then(response => {
      App.value = response.value
    })
  },
  view: () => {
    return m('div', [
      m('h1', 'Hello Mithril!'),
      m('button', { onclick: App.fetchValue }, 'Ping API'),
      App.value && m('p', App.value)
    ])
  }
}

m.mount(root, App)