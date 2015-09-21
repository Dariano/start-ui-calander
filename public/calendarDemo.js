var app = angular.module('calendarDemoApp', ['ui.calendar']);

app.controller('MainCtrl', function($scope) {
  var vm = this;
  
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  var staticEventSource = [
    { title: 'All Day Event',start: new Date(y, m, 1) },
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
  
  
  vm.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        eventColor: '#378006',
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: dayClick,
        eventClick: eventClick
      }
  };
  
  function dayClick(date, jsEvent, view){
     console.log(date);
     console.log(jsEvent);
     console.log(view);
  };
  
  function eventClick(date, jsEvent, view){
    console.log(date);
    console.log(jsEvent);
    console.log(view);
  };
  
});
