var developer = ['Thu Thu','Soe',1988,'Developer',false,'white'];

// for(var i=0;i<developer.length;i++){
//     if(typeof developer[i] !== 'string') continue;//Continue means Loop will work still even testing is wrong
//     console.log(developer[i]);
// }

for(var i=0;i<developer.length;i++){
     if(typeof developer[i] !== 'string') break;//Break means immediately out of Loop if condition is wrong
     console.log(developer[i]);
 }

//  var i=0;//Start declare counter i
//  while(i<developer.length){
//      console.log(developer[i]);
//      i++;//increase i
//  }