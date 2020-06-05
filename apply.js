Function.prototype.applycopy = function(context,arr){
    var result = null 
    context = context || Window
    context.fn = this
    if(!arr){
        result = context.fn()
    }else{
        var args = []
        for(var i = 0;i < arr.length; i++){
            args.push('arr['+i+']')
        }
        result = eval('context.fn('+args+')')
    }
    
    delete context.fn
    return result
}


// es6 call&apply
Function.prototype.apply1 = function(){
    let result = null,
    [context,...args] = arguments
    context = context || Window
    context.fn = this
    result = context.fn(...args)
    delete context.fn
    return result
}