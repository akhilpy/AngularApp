var myApp = angular.module('myApp',[ 'ui.router']);

myApp.controller('LenderCtrl', ['$scope','LenderService', '$state', '$http', function($scope, LenderService, $state, $http) {
  
  $scope.customer ={
    Country:'', 
    state: '' 
  };
   $scope.customer1 ={
    Country:'', 
    state: '' 
  };
 


   $scope.sa={};
   $scope.ba={};
    $scope.autoApproval = false;
    $scope.autoDecline = false;
    $scope.customizations = false;
    $scope.integration=false;
    $scope.directory=false;
    $scope.govtprogram=false;
    $scope.smallbizz= false;
    $scope.consumers= false;
    $scope.Commercial= false;
    $scope.LinesofCredit=false;
    $scope.TermLoans=false;
    $scope.Creditcard=false;
    $scope.approvalvalue='';
    $scope.declinevalue='';
    $scope.first= false;
    $scope.second= true;
    $scope.third=  true;
    $scope.fourth= true;

  $scope.ShowHide = function () {
                $scope.IsVisible = $scope.otherbank;
            }

    
  $scope.countries = LenderService.getCountry();
  $scope.customertypes = LenderService.getCustomerType();
   $scope.customersubtypes = LenderService.getCustomerSubType();
   $scope.producttypes = LenderService.getProductType();
   $scope.INDproducttypes = LenderService.getProductTypeWithIND();
   $scope.consumersProductTypes = $scope.INDproducttypes;
  
   $scope.businessProductTypes = angular.copy($scope.INDproducttypes);
   $scope.commercialProductTypes = angular.copy($scope.INDproducttypes);
  
  $scope.getFinancerList = function(){
    $scope.list = LenderService.getFinancerList($scope.customer.Country);
  
   
  }

  $scope.getgovtProgram = function(){
    $scope.govtprograms = LenderService.getgovtProgram($scope.customer.Country);
   
  }
  
  $scope.submit= function(){
  $scope.bankNameArray =[];
  $scope.govtProgram =[];
  angular.forEach($scope.list, function(item){
    if(!!item.selected) $scope.bankNameArray.push(item.value);
  })
   $scope.bankNameArray.push($scope.otherbank);


    angular.forEach($scope.govtprograms, function(item){
    if(!!item.selected) $scope.govtProgram.push(item.value);
  })


      var data ={
          country:$scope.customer.Country,
          add:$scope.sa,
          headoffice:$scope.ba,
          instituteName:$scope.institutename,
          bank:$scope.bankNameArray,
          input:$scope.inputs,
          approvalvalue:$scope.approvalvalue,
          declinevalue:$scope.declinevalue,
          govtProgrrams:$scope.govtprograms,
          name:$scope.name,
          ownname:$scope.ownname,
          startDate:$scope.startdate,
      }
        alert(JSON.stringify(data));
       LenderService.setLenderDetails(data);

      $state.go('lenderinfo');

};
     $scope.update = function(sa) {
    $scope.ba = angular.copy($scope.sa);
    $scope.customer1.Country = angular.copy($scope.customer.Country);
    };
    /* TO add dynamically input field*/
    $scope.techadmins = [{id: 'choice1'}];
    $scope.bizOwners = [{id: 'choice1'}];
    $scope.Managers = [{id: 'choice1'}];
 
    //var type= 
     $scope.addField = function(type) {
      if(type=='admin'){
    var newItemNo = $scope.techadmins.length+1;
    $scope.techadmins.push({'id':'choice'+newItemNo});
      }
      if(type=='owner'){
    var newItemNo = $scope.bizOwners.length+1;
    $scope.bizOwners.push({'id':'choice'+newItemNo});
      }
      if(type=='manager'){
    var newItemNo = $scope.Managers.length+1;
    $scope.Managers.push({'id':'choice'+newItemNo});
      }
    };

   $scope.removeField = function(type) {
    if(type=='admin'){
    var lastItem = $scope.techadmins.length-1;
    $scope.techadmins.splice(lastItem);
  }
  if(type=='owner'){
    var lastItem = $scope.bizOwners.length-1;
    $scope.bizOwners.splice(lastItem);
  }
  if(type=='manager'){
    var lastItem = $scope.Managers.length-1;
    $scope.Managers.splice(lastItem);
  }

};

}]);

myApp.controller('LenderInfoCtrl',['$scope','LenderService', '$state', function($scope, LenderService, $state) {

$scope.LenderData = LenderService.getLenderDetails();

 }]); 

/*Directive to scroll section*/

myApp.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm) {
      $elm.on('click', function() {
        $("body").animate({scrollTop: $elm.offset().top}, "slow");
        $elm.hide();
      });
    }
  }
});
