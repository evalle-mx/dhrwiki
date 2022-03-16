/* Controllers */
wikiApp
.controller('mainController', function($scope,$rootScope,$routeParams, $location, $route, $templateCache, Archs){
    $scope.today = new Date();
    $scope.msgSuccess;
    $scope.msgError;

  /* Load initialization and Cataloge from json */
    $scope.cat={};
  //$scope.cat.manufacts = Archs.makers();
    
    console.log('$scope.cat: ', $scope.cat );

    $scope.openMyModal = function(modalId){
        console.log('<openMyModal>');
        if(modalId){
            console.log('abriendo modal: ', modalId );
            $('#'+modalId).modal('show');
        }
        else{
            alert('modalId no valido: '+modalId);
            return;
        }
    }

 // $scope.vehicules = Archs.query(); //Callback to DB

 /* Verifies correct format for email */
    $scope.validEmail = function(){
        console.log('<validEmail>  ');
        $scope.msgError = '';
        $scope.msgSuccess='';

        if($scope.tmpVehicle.email){
            console.log('Validating email: ', $scope.tmpVehicle.email );
            let email = angular.copy($scope.tmpVehicle.email);

        //Using Regular Expression
            let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!email.match(emailregex)){
                $scope.msgError = 'Your email "'+ email + '" is not valid, please review';
                $('#mdInfo').modal('show');
                $scope.tmpVehicle.email = '';
            }
        }
    }

  /* Verifies correct format for phone number */
    $scope.validPhone = function(){
        console.log('<validPhone>  ');
        $scope.msgError = '';
        $scope.msgSuccess='';

        console.log('Validating phone: ', $scope.tmpVehicle.phone );
        if($scope.tmpVehicle.phone){
        let phoneNumber = angular.copy($scope.tmpVehicle.phone);
        //Using Regular Expression
        var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        // /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(!phoneNumber.match(phoneno)){
            $scope.msgError = 'Phone Number "'+ phoneNumber + '" is not valid, please review';
            $('#mdInfo').modal('show');
            $scope.tmpVehicle.phone = '';
        }
        }
    }


    /*
    $scope.selModel = function(){
        console.log('<selModel>')
        let idMaker = $scope.tmpVehicle.make;
        console.log('Loading models for idMaker: ', idMaker );

        $scope.cat.manufacts.forEach( function(maker, index) {
            if(maker.idMaker == idMaker) {
            console.log('Reloading cat.model: ', maker.models )
            $scope.cat.models = angular.copy(maker.models);
            } 
        });      
    }  
  */


})
.controller('homeCtrl', function($scope, $rootScope,$routeParams, $location, $route, $templateCache, Archs){
    document.title = "Welcome";
    console.log('homeCtrl...');
    
})
.controller('acronymCtrl', function($scope, $rootScope,$routeParams, $location, $route, $templateCache, Archs){
    console.log('acronymCtrl...');
    document.title = "Acronyms";
})
/* Installation Views Controller */
.controller('installerCtrl', function($scope, $rootScope,$routeParams, $location, $route, $templateCache, Archs){
    console.log('installerCtrl...');
})
/* Code Views Controller */
.controller('codeviewCtrl', function($scope, $rootScope,$routeParams, $location, $route, $templateCache, Archs){
    console.log('codeviewCtrl...');
})
/* Support Views Controller */
.controller('supportCtrl', function($scope, $rootScope,$routeParams, $location, $route, $templateCache, Archs){
    console.log('supportCtrl...');
})

;