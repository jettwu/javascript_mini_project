function sum(count){
    var res = 0;
    var add = function(){
    	for(var num in arguments){
        	res += arguments[num];
        }
        if(arguments.length !== count){
        	count -= arguments.length;
            return add;
        }
        return res;
    }
	return add;
}

console.log(sum(4)(20,30,40,10));
console.log(sum(4)(20)(30)(10)(40));
console.log(sum(4)(30,20)(10,40));