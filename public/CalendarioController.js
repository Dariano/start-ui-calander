/* global angular */

angular.module('calendarDemoApp')
.controller('CalendarioController', ['Calendario', function(Calendario) {
  var vm = this;
  
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  var staticEventSource = [
    { title: 'All Day Event',start: new Date(y, m, 1) },
    { title: 'All Day Event',start: new Date(y, m, 2) },
    { title: 'All Day Event',start: new Date(y, m, 3) },    
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
  // Calendario.configuracao.calendar.dayClick = dayClick;
  Calendario.setValor(1);
  // function dayClick(date, jsEvent, view){
  //     console.log('dayclick = 22');
  //     Calendario.setValor(22)
  // };
                                      
   // Calendario.configuracao.calendar.eventClick = 
   // function eventClick(date, jsEvent, view){
    //   console.log('Valor2 = ',  Calendario.getValor());
    // };
  
}]);
