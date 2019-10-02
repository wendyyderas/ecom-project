var expect  = require('chai').expect;
var request = require('request');

///this is passing test 
it('returns main page content', function(done) {
    request('http://localhost:3000' , function(error, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
    });
});

///this is a passing test
it('returns product content', function(done) {
    request('/api/product' , function(error, res, body) {
        expect(200);
        done();
    });
});

// ////this is a passing test
it('returns contact content', function(done) {
    request('http://localhost:3000/contact' , function(error, res, body) {
        expect(200);
        done();
    });
});

it('returns contact content', function(done) {
    request('http://localhost:3000/product' , function(error, res, body) {
        expect(200);
        done();
    });
});