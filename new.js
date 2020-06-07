function objFactory() {
    var obj = {},
        Contructor = [].shift.call(arguments);
    obj.__proto__ = Contructor.prototype;
    var rej = Contructor.apply(obj, arguments);
    return typeof ret === "object" ? ret : obj;
}
