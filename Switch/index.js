
const date=(x)=>{
    switch(x){
        case 0:
            console.log(day="sunday");
            break;
        case 1:
            console.log(day="monDay");
            break;
        case 2:
            console.log(day="tuesday");
            break; 
        case 3: 
           console.log(day="wednesday") ;
            break;   
        case 4: 
            console.log(day="thursday");
            break;   
        case 5:
           console.log(day="friday");
            break; 
        case 6:   
            console.log(day="saturday");
           break; 
        default:
            console.log(text="worng Number");
    }
}
date(0);
date(1);
date(2);
date(3);
date(4);
date(5);
date(6);
date(7);