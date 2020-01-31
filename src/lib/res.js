const sender = function(sucess = true) {
    if (sucess) {
        return function(msg) {
            console.log('true ' + msg);
        };
    } else {
        return function(msg) {
            console.log('false ' + msg);
        };
    }
 }

const s = sender;

let f = s();
f('teste1');

f = s(true);
f('teste2');

f = s(false);
f('teste3');


