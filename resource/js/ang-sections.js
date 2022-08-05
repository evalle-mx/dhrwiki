/* >>>>>>>>>>>>>> Sections <<<<<<<<<<<<<< */
wikiApp
/* main-menu  SOLO DEMO */ 
.directive('mainMenu', function() {
  let templateFooter = 'section/mainMenu.html';
  return {
    templateUrl: templateFooter
  };
})
/* side-bar */
.directive('sideBar', function() {
  let templateFooter = 'section/sideBar.html';
  return {
    templateUrl: templateFooter
  };
})
/* top-bar */
.directive('topBar', function() {
  let templateFooter = 'section/topBar.html';
  return {
    templateUrl: templateFooter
  };
})
/* dhr-footer */
.directive('dhrFooter', function() {
  let templateFooter = 'section/dhrFooter.html';
  return {
    templateUrl: templateFooter
  };
})
/* *******  MODALES  *****   */
/* modal-tce */
.directive('modalTce', function() {
  let templateFooter = 'section/modal/mdTce.html';
  return {
    templateUrl: templateFooter
  };
})



/* *****  Code section  ***** */
/* common-sql */
.directive('commonSql', function() {
  let templateFooter = 'views/code/sql/commonsql.html';
  return {
    templateUrl: templateFooter
  };
})
/* persona-sql */
.directive('personaSql', function() {
  let templateFooter = 'views/code/sql/personaSql.html';
  return {
    templateUrl: templateFooter
  };
})
  /* posicion-sql */
.directive('posicionSql', function() {
  let templateFooter = 'views/code/sql/posicionSql.html';
  return {
    templateUrl: templateFooter
  };
})
    /* domicilio-sql */
  .directive('domicilioSql', function() {
  let templateFooter = 'views/code/sql/domicilioSql.html';
  return {
    templateUrl: templateFooter
  };
})
/* docclass-sql */
.directive('docclassSql', function() {
  let templateFooter = 'views/code/sql/docClassSql.html';
  return {
    templateUrl: templateFooter
  };
})
/* notificacion-sql */
.directive('notificacionSql', function() {
  let templateFooter = 'views/code/sql/notificacionSql.html';
  return {
    templateUrl: templateFooter
  };
})
/* candidato-sql */
.directive('candidatoSql', function() {
  let templateFooter = 'views/code/sql/candidatoSql.html';
  return {
    templateUrl: templateFooter
  };
})
/* *****  Support section  ***** */

  /* acronym-security */
.directive('acronymSecurity', function() {
   let templateFooter = 'views/code/acronyms/security.html';
   return {
    templateUrl: templateFooter
    };
  })
/* acronym-security */
.directive('amazon', function() {
  let templateFooter = 'views/code/acronyms/aws.html';
    return {
      templateUrl: templateFooter
    };
  })

/*   AWS   */
/* aws-tuto */
.directive('awsTuto', function() {  
    return {
      templateUrl: 'views/aws/awsTutorials.html'
    };
  })
/* aws-vtuto */
.directive('awsVtuto', function() {
    return {
      templateUrl: 'views/aws/videoTuto.html'
    };
  })
/* aws-site */
.directive('awsSite', function() {  
    return {
      templateUrl: 'views/aws/awsSite.html'
    };
  })
/* aws-tips */
.directive('awsTips', function() {  
    return {
      templateUrl: 'views/aws/awsTips.html'
    };
})
;