const getHotelName = document.querySelector('#hotel-name')
const getHotelLocation = document.querySelector('#hotel-location')
const getHotelImg = document.querySelector('#hotel-img')
const getHotelRating = document.querySelector('#hotel-rating')
const getHotelAnonymous = document.querySelector('#rating-anonymous')
const maxValueRating = 5

const questionHotelName = prompt('¿Cual es el nombre del hotel?')
const questionHotelLocation = prompt('¿Cual es la localización del hotel?')
const questionHotelImage = prompt('¿Cual es la imágen del hotel?')
let questionHotelRating = prompt('¿Cual es la valoración del hotel? (1-5)')
const questionHotelAnonymous = confirm(
  '¿Quieres que la valoración sea anónima?',
)

getHotelName.innerHTML = questionHotelName
getHotelLocation.innerHTML = questionHotelLocation
getHotelImg.src = questionHotelImage
getHotelAnonymous.checked = questionHotelAnonymous

if (questionHotelRating > maxValueRating) {
  questionHotelRating = maxValueRating
}

for (let i = 1; i <= questionHotelRating; i++) {
  const createStartRating = document.createElement('span')
  getHotelRating.appendChild(createStartRating).innerHTML = '&#9734;'
}

// https://media.hrs.com/media/image/f6/ec/1d/GHOTEL_hotel_living_Essen-Essen-Aussenansicht-2-779404.jpg
