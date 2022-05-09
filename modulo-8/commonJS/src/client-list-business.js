const clientElement = require('./client-business')
const clientsData = require('./data-business')

function printClientsAccounts() {
  const clients = clientsData.getClients()
  const ul = document.createElement('ul')
  for (let client of clients) {
    const element = clientElement.getClientElement(client)
    ul.appendChild(element)
  }

  document.getElementById('root').appendChild(ul)
}

module.exports = { printClientsAccounts }
