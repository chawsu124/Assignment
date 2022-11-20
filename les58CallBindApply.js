var mgmg = {
    name : 'Mg Mg',
    age : 30,
    job : 'Teacher',
    presentation : function(style,timeOfDay){
        if(style === 'formal'){
            console.log('God ' + timeOfDay + ' ladies and gentlement. I am ' +
            this.name + ' I am ' + this.job  + ' I am ' + this.age +
             ' Have a nice ' + timeOfDay);
        }
        else if(style === 'friendly')
        {
            console.log('Hey what up! I am ' +  this.name +
             ' I am ' + this.job  + ' I am ' + this.age + ' Have a nice ' + 
            timeOfDay);
        }
    }
}

mgmg.presentation('formal','Evening');

var ayeaye = {
    name : 'Aye Aye',
    age : 35,
    job : 'Designer'
}

mgmg.presentation.call(ayeaye,'friendly','Morning');
mgmg.presentation.apply(ayeaye,['formal','Afternoon']);

var mgmgfriendly = mgmg.presentation.bind(mgmg,'friendly');
mgmgfriendly('Morning');
