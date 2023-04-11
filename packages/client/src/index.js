import m from 'mithril'

const root = document.getElementById('app')

const App = {
  view: () => {
    return m('h1', 'Hello Mithril!')
  }
}

m.mount(root, App)