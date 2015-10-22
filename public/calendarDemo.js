var app = angular.module('calendarDemoApp', ['ui.calendar']);

app.controller('MainCtrl', function($scope, Calendario) {
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
  Calendario.configuracao.calendar.dayClick = function (date, jsEvent, view){
                                          console.log('dayclick = 2')
                                          Calendario.setValor(2)
                                      };
                                      
   Calendario.configuracao.calendar.eventClick = function (date, jsEvent, view){
                                          console.log('Valor = ',  Calendario.getValor());
                                      };
  
});

app.controller('MainCtrl2', function($scope, Calendario) {
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
  Calendario.configuracao.calendar.dayClick = dayClick;
  
  function dayClick(date, jsEvent, view){
                                          console.log('dayclick = 22');
                                          Calendario.setValor(22)
                                      };
                                      
   Calendario.configuracao.calendar.eventClick = function eventClick(date, jsEvent, view){
                                          console.log('Valor2 = ',  Calendario.getValor());
                                      };
  
});

app.factory('Calendario',function(){
  
  var _valor;
  
  var _setValor = function(valor){
      _valor = valor;
    }
    
  var _getValor = function(){
      return _valor;
    }
  
  var config = {
      calendar:{
        height: 450,
        editable: true,
        eventColor: '#378006',
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        }
      }
  };
  
  return {
    configuracao: config,
    setValor: _setValor,
    getValor: _getValor
  }  
})
