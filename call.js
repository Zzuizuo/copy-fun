//es5
Function.prototype.call = function(context){
    var result = null 
    args = []
    context = context || Window
    context.fn = this
    for(var i = 1;i < arguments.length; i++){
        args.push('arguments['+i+']')
    }
    result = eval('context.fn('+args+')')
    delete context.fn
    return result
}