angular.module('calendarDemoApp')
.factory('Calendario', function(){
  
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
    setValor: function(valor){
      config.calendar.dayClick = function (date, jsEvent, view){
          console.log('dayclick = ', valor);
      };
    }
  }  
})