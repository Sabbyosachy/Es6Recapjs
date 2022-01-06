const play="cricketer";
const age=27;

// Without template string use
//const Fulldetails="Sakib is a "+play+"he is "+age+ " years old";

//Using template string
const Fulldetails=`Sakib is a ${play} he is ${age} years old`;
console.log(Fulldetails);