//Advanced tagged templates
function template(strings, ...keys) {
    return (function (...values) {
        var dict = values[values.length - 1] || {};
        var result = [strings[0]];
        keys.forEach(function (key, i) {
            var value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join('');
    });
}

var t1Closure = template `${0}${1}${0}!`;
//console.log (t1Closure);
console.log(t1Closure('Y', 'A'));
//=> "YAY!"
var t2Closure = template `${0} ${'foo'}!`;
//console.log (t2Closure);
console.log(t2Closure('Hello', {
    foo: 'World'
}));
//=> "Hello World!"