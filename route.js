'use strict';

angular.module('myApp')
  .config(function ($stateProvider) {
    $stateProvider

      .state('lender', {
        url: '',
        templateUrl: 'page.html',
        controller: 'LenderCtrl',
      })
      .state('lenderinfo', {
        url: 'lenderinformation',
        templateUrl:'lenderinfo.html',
        controller:'LenderInfoCtrl',
      })
      .state('consumertermloan', {
        url: 'consumerTermLoan',
        templateUrl:'consumerTermLoan.html',
        controller: 'TermLoanCtrl',
      })
      .state('consumermortgages', {
        url: 'consumerMortgags',
        templateUrl:'consumerMortgages.html',
        //controller: 'LenderInfoCtrl',
      })
      .state('consumercreditcardloan', {
        url: 'consumerCreditcardLoan',
        templateUrl:'consumerCreditCardloan.html',
        //controller: 'LenderInfoCtrl',
      })
      .state('consumerlinecreditloan', {
        url: 'consumerLineCreditLoan',
        templateUrl:'consumerLineCreditloan.html',
        //controller: 'LenderInfoCtrl',
      })
    });

  
