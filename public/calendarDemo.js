/* global angular */

angular.module('calendarDemoApp')
.controller('CalendarioController2', ['$scope', 'Calendario', 'uiCalendarConfig', function($scope, Calendario, uiCalendarConfig) {
  
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

  $scope.eventSources = [
    staticEventSource
  ];
  
   var config = {
      calendar:{
        height: 450,
        editable: true,
        eventColor: '#378006',
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: dayClick
      }
  };  
  
  $scope.uiConfig = config;
      
  function dayClick(date, jsEvent, view){
    console.log(view.calendar);
       
    if(view.name != 'month') return;
    
    var eventosDoDia = view.calendar.clientEvents(function(item){ return item.start.toObject().date == date.date() })
    angular.forEach(eventosDoDia, function(item){
      view.calendar.removeEvents(item._id);
    });        
    
    var hoje = date.toObject();
    view.calendar.changeView('agendaDay');
    view.calendar.gotoDate(date);
    view.calendar.renderEvent({ 
        title: 'All Day Event 2', 
        start: new Date(hoje.years, hoje.months, hoje.date, 12, 0, 0),
        end: new Date(hoje.years, hoje.months, hoje.date, 13, 0, 0),
        allDay: false,
      });
  }
}]);

