import state from './state/storage'

globalThis.state = state

require('./layout/builder')
require('./controllers/builder')
require('./figures/index')