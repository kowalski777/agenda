document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid', 'timeGrid'],
    defaultView: 'dayGridMonth',
    defaultDate: '2020-05-07',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'

    },
/*
    events: [
      {
        title: 'All Day Event',
        start: '2020-05-01'
      },
      {
        title: 'Long Event',
        start: '2020-05-07',
        end: '2020-05-10'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2020-05-09T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2020-05-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2020-05-11',
        end: '2020-05-13'
      },
      {
        title: 'Meeting',
        start: '2020-05-12T10:30:00',
        end: '2020-05-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2020-05-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2020-05-12T14:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2020-05-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2020-05-28'
      }
    ]*/

  });

  calendar.render();

});

