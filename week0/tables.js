'use strict';

//var data = require("./students.json");

(function($) {

  var data = {
    'students': [
      {
        'name' : 'Daniel Taskoff',
        'course' : 'Frontend JavaScript'
      }, {
        'name' : 'Elena Jeleva',
        'course' : 'Programming 101'
      }, {
        'name' : 'Luboslava Dimitrova',
        'course' : 'Frontend JavaScript'
      }, {
        'name' : 'Nikola Dichev',
        'course' : 'Core Java'
      }, {
        'name' : 'Anton Antonov',
        'course' : 'Core Java'
      }
    ]
  };

  var students = data.students;

  function groupStudents(students) {
    var groups = {},
        group,
        course;

    students.forEach(function(student){
      course = '' + student.course;
      group = groups[course] || [];

      group.push(student.name);
      groups[course] = group;
      }
    );
    return groups;
  }

  function printTable(arr, group){
    var output = '<table class="table table-striped table-boarded"><thead><tr><th>' + group + '</th></tr></thead>';
      output += '<tr><td>' + arr.sort().join('</td></tr><tr><td>') + '</td></tr>';
      output += '</table>';
    return output;
  }

  var groups = groupStudents(students),
      group;

  for (group in groups){
    var StudentsTable = printTable(groups[group], group);
    $('#container').append(StudentsTable);
  }

}(jQuery));
