import moment from 'moment';

export function calcAmount(arrDonation) {
  let sum = 0;
  for (let i = 0; i < arrDonation.length; i++) {
    // console.log(arrDonation[i].amount)
    sum += arrDonation[i].amount;
  }
  return sum;
}

export function calcPercent(sum, target) {
  return (Math.floor(sum / target * 100));
}


export function showByFormat(sum, objCurrency) {
  let x = objCurrency.format === "USD" ? "$" : "₪";

  if (objCurrency.format === 'USD')
    return x + Math.floor(sum / objCurrency.USD).toLocaleString();
  return (x + Math.floor(sum).toLocaleString());

}

export function saveByIls(sum, objCurrency) {
  if (objCurrency.format === "ILS")
    return sum;
  return sum * objCurrency.USD;
}

export function isSucssesCangeFormt(format) {
  if (format === 'USD')
    alert('האתר הועבר למצב דולר');
  else
    alert('האתר הועבר למצב שקל');

}
export function funcCalcOverTime(dinnerDate) {
  const currentDate = new Date();


  const startDate = moment(new Date(dinnerDate));
  const timeEnd = moment(currentDate);
  const diff = timeEnd.diff(startDate);
  const diffDuration = moment.duration(diff);

  if (diffDuration.days() > 7)
    return " יותר משבוע";
  if (diffDuration.days() === 7)
    return "לפני שבוע";
  if (diffDuration.days() > 0)
    return (`לפני ${(diffDuration.days())} ימים`);

  if (diffDuration.hours() === 24)
    return "לפני יום"
  if (diffDuration.hours() > 0)
    return (`לפני ${(diffDuration.hours())} שעות`);

  if (diffDuration.minutes() === 60)
    return "לפני שעה"
  if (diffDuration.minutes() >= 0)
    return (`לפני ${(diffDuration.hours())} דקות`);
}







