
var x = 7.89;

//console.log(Math.floor(x));

var mathFloor = {
    floor : function(x){
       // convert  Numberin into String
        var strX = x.toString();
        
      // receive floor Number as String
        var floorX = '';
        
        var arr = [];
        var j = 0, i = 0;
        var result;
        
      //push the string Number inside the array 
            for(; i < strX.length; i++){
                    arr.push(strX[i]);
                 }
                 
                 
    //Remove the decimal Number
        while(arr[j] != '.'){
                floorX += arr[j];
                j++;
            }
            
     //convert String intu Number
        result =Number(floorX);
        
        return result;
}
};

var result = mathFloor.floor(x);

console.log(result);
