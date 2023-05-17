const sendPaymentRequestToApi = require('./4-payment')
const Utils = require('./utils')
const sinon = require('sinon')
const chai = require("chai");
const expect = chai.expect;

describe('payment', function () {
  it('...', function () {
    const api = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consol = sinon.spy(console, 'log')
    sendPaymentRequestToApi(100, 20)
    expect(api.calledWith('SUM', 100, 20)).to.be.true;
    expect(consol.calledOnceWithExactly('The total is: 10'));
    api.restore()
    consol.restore()
  })
})
