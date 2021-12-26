'use strict';

/* App Module */
let wikiApp = angular.module('wikiApp', ['ngRoute', 'appServices']);



/* >>>>>>>>>>>>>> Services <<<<<<<<<<<<<< */
let appServices = angular.module('appServices', ['ngResource']);

appServices.factory('Archs', ['$resource',
  function($resource){
    return $resource('./json/:fileName.json', {}, {
      query: {method:'GET', params:{fileName:'vehicules_db'}, isArray:true},
      midterm: {method:'GET', params:{fileName:'midterm'}, isArray:true},
      makers: {method:'GET', params:{fileName:'manufacturer'}, isArray:true}
    });
  }]);

  /* >>>>>>>>>>>>>> Routing <<<<<<<<<<<<<< */
wikiApp.config(function ($locationProvider, $routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/welcome.html'
  })
  .when('/acronyms', {  /* List of acronyms  */
    templateUrl: 'views/code/acronyms/homeAcronym.html'    
  })
  .when('/lnxcommands', {  /* List of Linux Command   */
    templateUrl: 'views/code/linux/commands.html'    
  })

  .when('/webserver', {  /* Apache web Server */
    templateUrl: 'views/install/webServer.html'    
  })
  .when('/instgradle', {  /* Gradle */
    templateUrl: 'views/install/gradle.html'    
  })
  .when('/instMaven', {  /* Maven */
    templateUrl: 'views/install/maven.html'    
  })
  .when('/instJava', {  /* JDK */
    templateUrl: 'views/install/java.html'    
  })
  .when('/instTomcat', {  /* Tomcat */
    templateUrl: 'views/install/tomcat.html'
  })
  .when('/instPostgresql', {  /* postgresql */
    templateUrl: 'views/install/postgresql.html'
  })
  .when('/instHadoop', {  /* Hadoop */
    templateUrl: 'views/install/hadoop.html'    
  })
  .when('/instMahout', {  /* Mahout */
    templateUrl: 'views/install/mahout.html'
  })
  .when('/instEclypseOxy', {  /* Eclipse Oxygen */
    templateUrl: 'views/install/eclipseOxy.html'
  })
  .when('/instRedis', {  /* Redis */
    templateUrl: 'views/install/secRedis.html'    
  })
  .when('/instFreeling', {  /* Freeling */
    templateUrl: 'views/install/freeling.html'    
  })


  .when('/instSsh', {  /* SSH */
    templateUrl: 'views/additionalsw/sshserv.html'    
  })
  .when('/instDocker', {  /* Docker */
    templateUrl: 'views/additionalsw/docker.html'    
  })
  .when('/instGit', {  /* GIT */
    templateUrl: 'views/additionalsw/git.html'    
  })


  .when('/winlnx', {  /* Windows to Linux reference */
    templateUrl: 'views/support/windows.html'
  })

/* Codigo y comandos propios de Proyecto XE */
  .when('/configDothr', {  /* Config Dothr */
    templateUrl: 'views/install/configDothr.html'    
  })
  .when('/codesql', {  /* Code Reference SQL */
    templateUrl: 'views/code/sql/homeSql.html'    
  })
  .when('/commxe', {  /* Comandos para iniciar XE */
    templateUrl: 'views/code/commXe.html'    
  })


  /*  *****  DEMOS-HTML  **** */
  .when('/e404', {  /* Pagina de error */
    templateUrl: 'section/e404.html'    
  })
  .when('/tables', {  /* DEMO de tablas paginadas */
    templateUrl: 'views/demo/tables.html'    
  })

  .otherwise({
  redirectTo: '/'
  });
});