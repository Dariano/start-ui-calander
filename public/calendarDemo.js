/* global angular */

angular.module('calendarDemoApp')
.controller('CalendarioController2', ['Calendario', function(Calendario) {
  var vm = this;
  
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  var staticEventSource = [
    { title: 'All Day Event',start: new Date(y, m, 1) },
    { title: 'All Day Event',start: new Date(y, m, 2) },
    { title: 'All Day Event',start: new Date(y, m, 3) },
    { title: 'All Day Event',start: new Date(y, m, 4) },
    { title: 'All Day Event',start: new Date(y, m, 5) },
    { title: 'All Day Event',start: new Date(y, m, 6) },
    { title: 'All Day Event',start: new Date(y, m, 7) },
    { title: 'All Day Event',start: new Date(y, m, 8) },
    { title: 'All Day Event',start: new Date(y, m, 9) },
    { title: 'All Day Event',start: new Date(y, m, 10) },
    { title: 'All Day Event',start: new Date(y, m, 11) },
    { title: 'All Day Event',start: new Date(y, m, 12) },
    { title: 'All Day Event',start: new Date(y, m, 13) },
    { title: 'All Day Event',start: new Date(y, m, 14) },
    { title: 'All Day Event',start: new Date(y, m, 15) },
    { title: 'All Day Event',start: new Date(y, m, 16) },
    { title: 'All Day Event',start: new Date(y, m, 17) },
    { title: 'All Day Event',start: new Date(y, m, 18) },
    { title: 'All Day Event',start: new Date(y, m, 19) },
    { title: 'All Day Event',start: new Date(y, m, 20) },
    { title: 'All Day Event',start: new Date(y, m, 21) },
    { title: 'All Day Event',start: new Date(y, m, 22) },
    { title: 'All Day Event',start: new Date(y, m, 23) },
    { title: 'All Day Event',start: new Date(y, m, 24) },
    
    {
					start: '2015-09-24',
					end: '2015-09-28',
					overlap: false,
					rendering: 'background',
					color: '#ff9f89'
				},
  ];

  vm.eventSources = [
    staticEventSource
  ];
  
  vm.uiConfig = Calendario.configuracao;
  Calendario.setValor(2);
  // Calendario.configuracao.calendar.dayClick = function (date, jsEvent, view){
  //                                         Calendario.setValor(2)
  //                                     };
  //                                     
   // Calendario.configuracao.calendar.eventClick = function (date, jsEvent, view){
    //                                       console.log('Valor = ',  Calendario.getValor());
    //                                   };
  
}]);

