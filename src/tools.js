import dayjs from 'dayjs';

export const getRandomInt = (min, max)=>{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomElement = (elements)=>elements[getRandomInt(0, elements.length-1)];

export const getTime = (interval, lastDate=dayjs())=>lastDate.add(interval, 'minute');
export const getInterval = (interval)=>{
  let hours = Math.trunc(+interval/60);
  const days = Math.trunc(hours/24);
  const minutes = (+interval)%60;
  hours = hours%24;
  let finalTime='';
  if (days>0){
    if(days>9){
      finalTime+=`${days.toString()}D `;
    }
    else{
      finalTime+=`0${days.toString()}D `;
    }
  }
  if ((days>0)||(hours>0)){
    if(hours>9){
      finalTime+=`${hours.toString()}H `;
    }
    else{
      finalTime+=`0${hours.toString()}H `;
    }
  }
  if(minutes>9){
    finalTime+=`${minutes.toString()}M `;
  }
  else{
    finalTime+=`0${minutes.toString()}M `;
  }
  return finalTime;
};
