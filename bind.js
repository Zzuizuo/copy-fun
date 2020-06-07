Function.prototype.bind = function (context) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var self = this
    var args = [].shift().call(arguments)
    var fBound = function () {
        var bindArgs = [].slice().call(arguments)
        self.apply(this instanceof self ? this : context, args.concat(bindArgs))
    }
    var fNOP = function () { }
    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP()
    return fBound
}