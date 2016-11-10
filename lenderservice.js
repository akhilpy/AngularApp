
myApp.factory("LenderService", ['$filter', function($filter){
 var service = {};
 var user={};
  
  var countrylist = [
            { "id": 1, "country": "CANADA" },
            { "id": 2, "country": "USA" },
           ];
    var financerList = [
            { "id": 1, "value": "Schedule 1 Bank", "countryId":'CANADA'},
            { "id": 2, "value": "Schedule 2 Bank", "countryId":'CANADA' },
            { "id": 3, "value": "Schedule 3 Bank", "countryId":'CANADA' },
            { "id": 4, "value": "Federal Credit Union","countryId":'CANADA' },
            { "id": 5, "value": "Provincial Credit Union","countryId":'CANADA' },
            { "id": 6, "value": "Government Bank","countryId":'CANADA' },
            { "id": 8, "value": "Licensed Money Lender","countryId":'CANADA' },
            { "id": 9, "value": "Trust Company","countryId":'CANADA' },
            { "id": 10, "value": "Mortgage Broker","countryId":'CANADA' },
            { "id": 11, "value": "Private Lender","countryId":'CANADA' },
            { "id": 12, "value": "National Bank","countryId":'USA' },
            { "id": 13, "value": "State Bank","countryId":'USA' },
            { "id": 14, "value": "Industrial-Charter Bank","countryId":'USA' },
            { "id": 15, "value": "Savings and Loan or Thrift","countryId":'USA' },
            { "id": 16, "value": "National Credit Union","countryId":'USA' },
            { "id": 17, "value": "State Credit Union","countryId":'USA' },
            { "id": 18, "value": "Licensed Money Lender","countryId":'USA' },
            { "id": 19, "value": "Mortgage Broker","countryId":'USA' },
            { "id": 20, "value": "Private Lender","countryId":'USA' },
            { "id": 21, "value": "Cooperative Bank","countryId":'USA' },
            { "id": 22, "value": "Community Development Bank","countryId":'USA' },
    ];

    var govtPrograms = [
            { "id": 1, "value": "CDIC", "countryId":'CANADA'},
            { "id": 2, "value": "CUDIC","countryId":'CANADA' },
            { "id": 2, "value": "CSBFP","countryId":'CANADA' },
            { "id": 4, "value": "FDIC","countryId":'USA' },
            { "id": 5, "value": "SBA","countryId":'USA' },
            { "id": 7, "value": "NCUSIF","countryId":'USA' },
            { "id": 8, "value": "DIF","countryId":'USA' },
            
    ];

    var customertype=[
            { "id": 1, "value": "Consumers" },
            { "id": 2, "value": "Small Businesses" },
            { "id": 3, "value": "Commercial" }
    ];
    var customersubtype=[
            { "id": 1, "value": "Minors" },
            { "id": 2, "value": "Students" },
            { "id": 3, "value": "New Immigrants" },
            { "id": 4, "value": "Foreign Business" },
            { "id": 5, "value": "Foreign Consumer" },
            { "id": 6, "value": "Investment Real Estate" }
           
    ];
    var producttype=[
            { "id": 1, "value": "Term Loans" },
            { "id": 2, "value": "Lines of Credit" },
            { "id": 3, "value": "Credit Card self-issued" },
            { "id": 4, "value": "Credit Card 3rd party issued" },
            { "id": 5, "value": "Mortgages" },
            { "id": 6, "value": "2nd Mortgages" },
            { "id": 7, "value": "Mortgages" },
            { "id": 8, "value": "Bridge Loans" },
            { "id": 9, "value": "Cash Advances" },
            { "id": 10, "value": "Receivables-based Loans" },
            { "id": 11, "value": "Asset-backed Loans" }
    ];
    var producttypeWithIND=[
            { "id": 1, "value": "Term Loans", "status":false },
            { "id": 2, "value": "Lines of Credit", "status":false },
            { "id": 3, "value": "Credit Card self-issued", "status":false },
            { "id": 4, "value": "Mortgages", "status":false }
    ];

  service.getCountry = function(){    
    return countrylist ;
  };
  service.getCustomerType = function(){    
    return customertype;
  };
  service.getCustomerSubType = function(){    
    return customersubtype;
  };
  service.getProductType = function(){    
    return producttype;
  };
  service.getProductTypeWithIND = function(){    
    return producttypeWithIND;
  };
  service.setLenderDetails = function(data){ 
   LenderDetails = data; 
  };

  service.getLenderDetails = function(){
  // alert(user); 
 return LenderDetails;
  };
  
  service.getFinancerList = function(countryId){
      if(countrylist){
    var states = ($filter('filter')(financerList, {countryId: countryId}));
    return states;
  }
  else{
     return states=[];
  }
  };
  service.getgovtProgram = function(countryId){
    
    var govtProgram = ($filter('filter')(govtPrograms, {countryId: countryId}));
    return govtProgram;
  };
  return service;
}]);
