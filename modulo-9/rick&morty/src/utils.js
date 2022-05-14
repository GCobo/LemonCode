export const createCard = (character) => {
  const element = document.createElement('li')
  element.appendChild(createAvatar(character))
  element.appendChild(createRowText(character))
  return element
}

const createAvatar = (character) => {
  const element = document.createElement('img')
  element.width = 100
  element.height = 100
  element.src = character.image
  return element
}

const createRowText = (character) => {
  const element = document.createElement('span')
  element.append(character.name)
  return element
}
