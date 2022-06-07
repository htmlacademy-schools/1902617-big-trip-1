import { getRandomInt, getRandomElement, getTime} from '../tools.js';
import { nanoid } from 'nanoid';

const cities=['Amsterdam','Chamonix','Geneva','Ekaterinburg'];
const sentences=['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];

const types=['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const offersTypes=['Add luggage','Switch to comfort class','Add meal','Choose seats','Travel by train', 'Order Uber', 'Rent a car'];

const getDestination  = () =>{
  const name = getRandomElement(cities);

  const discNum=getRandomInt(1, 5);
  let description='';
  for (let k=0; k<discNum; k++){
    description=[description, getRandomElement(sentences)].join(' ');
  }

  const picNum=getRandomInt(1, 5);
  const pictures=[];
  for (let k=0; k<picNum; k++){
    pictures.push({
      src: `http://picsum.photos/300/200?r=${Math.random().toString()}`,
      description: `Somewhere in ${name}`,
    });
  }

  return {
    description,
    name,
    pictures,
  };
};

const getOffersArr = () => {
  let result=[];
  const typesNum = getRandomInt(0, 5);
  let tempTypes = [...types];
  for (let k = 0; k < typesNum; k++){
    let someType = getRandomElement(tempTypes);
    tempTypes.splice(tempTypes.indexOf(someType), 1);
    result.push(getOffers(someType));
  }
  return result;
}

const getOffers=(someType)=>{
  const offersNum = getRandomInt(0, 5);
  const offers = [];
  for (let k = 0; k < offersNum; k++){
    offers.push({
      id:k+1,
      title: getRandomElement(offersTypes),
      price:getRandomInt(1,20)*10,
      isChosen: Math.random() < 0.5,
    });
  }
  return {
    type: someType,
    offers,
  };
};

export const getPoint = () =>{
  const type=getRandomElement(types);
  const dateFrom=getTime(getRandomInt(1, 864)*5);
  const dateTo=getTime(getRandomInt(1, 24)*5, dateFrom);
  return {
    basePrice: getRandomInt(0, 1200),
    dateFrom,
    dateTo,
    destination: getDestination(),
    id: nanoid(),
    isFavorite: getRandomInt(0,1)===1,
    offers: getOffersArr(),
    type,
  };
};
