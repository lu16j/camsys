/**
 *  Exposes useful utility functions.
 */
var Util = new (function() {
    this.format_dollars = function (number) {
        var amount = ''+number;
        var pi = amount.indexOf('.');
        if (pi > 0)
            amount = amount.substring(0, pi+3);
        else
            pi = amount.length;
        for (var i=pi-3; i>0; i--) {
            if ((pi-i)%3 === 0)
                amount = amount.substring(0, i) + ',' + amount.substring(i, amount.length);
        }
        return '$'+amount;
    };
    
    this.linear_regression = function (points) {
        var sumx=0, sumy=0, sumx2=0, sumy2=0, sumxy=0, n=points.length;
        for (var i in points) {
            var x = points[i][0],
                y = points[i][1];
            sumx += x;
            sumx2 += (x*x);
            sumy += y;
            sumy2 += (y*y);
            sumxy += (x*y);
        }
        var b = (sumy*sumx2 - sumx*sumxy)/(n*sumx2-sumx*sumx);
        var a = (n*sumxy - sumx*sumy)/(n*sumx2-sumx*sumx);
        
        return [a,b];
    };
    
    this.random_integer = function (range) {
        return Math.round(Math.random()*(range[1]-range[0])+range[0]);
    };
    
    this.clone = function (obj1, obj2) {
        var cloned = JSON.parse(JSON.stringify(obj1));
        for (var i in obj2)
            cloned[i] = obj2[i];
        return cloned;
    };
})();