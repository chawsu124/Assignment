// -------------Date()

//new Date();
const todayDate = new Date();
todayDate; //output is  Thur Aug 07 2022
todayDate.getDay(); //4 // 4 is Thursday // Mon is 1 // Start Mon to 1, Tur to 2,...
todayDate.getDate(); // 07 // 07 is Aug 3 day in calendar
todayDate.getMonth();//07
todayDate.getYear();// but this fun: is not very used popular //121
todayDate.getFullYear();//2022
todayDate.getTime();//eg: 1685324456652

//input to Date()
new Date('05.07.2021');// Fri May 07 2021 
new Date(2021, 0); // Fri Jan 01 2021 //(Year, Month)// Default Day is 01
new Date(2021, 0, 23); // Sat Jan 01 2021
new Date(2021, 0, 23, 9); // Sat Jan 01 2021 09:00:00 // 9 hour
new Date(2021, 0, 23, 9, 45, 35); // Sat Jan 01 2021 09:45:35 // 9 hour 45 min 35 sec  

//setDate() to change
todayDate; // Thur Aug 07 2022
todayDate.setDate(4);
todayDate; // Mon Aug 4 2022
todayDate.setMonth(6);
todayDate; // Mon July 4 2022

//getHours() and setHours()
todayDate; // Mon July 4 2022
todayDate.getHours(); // 15 // 15 hour is 3pm
todayDate.setHours(todayDate.getHours()+ 24); // 15 hours + 24 hours
todayDate; // Tue July 5 2022 // Increase one day in 24 hours // or Arrive the next day

//Homework of Date
// const isAllowToCancel = (date) => {
// 1. const currentDate = new Date();
// 2. currentDate + 24 hours (getHours, setHours) ==> newcurrentDate
// 3. use getTime():  newcurrentDate.getTime() > date.getTime() ==> return false
// 4. use getTime():  newcurrentDate.getTime() < date.getTime() ==> return true