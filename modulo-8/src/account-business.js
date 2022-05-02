import { getNodeStyle } from './style-business.js'

export function getClientAccountsElement(accounts) {
  const ul = document.createElement('ul')
  for (let account of accounts) {
    ul.append(getAccountElement(account))
  }
  return ul
}

export function getAccountElement(account) {
  const li = document.createElement('li')

  li.style = getNodeStyle(account)

  li.append('[Saldo: ' + account.money + '] IBAN: ' + account.iban)
  return li
}
