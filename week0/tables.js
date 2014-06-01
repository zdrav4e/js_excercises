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
        'name' : 'Anton Antonov',
        'course' : 'Core Java'
      }, {
        'name' : 'Nikola Dichev',
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

  function printTable(arr){
    var output = '';
    output += '<tr><td>' + arr.join('</td></tr><tr><td>') + '</td></tr>';
    return output;
  }

  var groups = groupStudents(students),
      group;

  for (group in groups){
    var output = '<table><thead><tr><th>' + group + '</th></tr></thead>';

    var StudentsTable = printTable(groups[group]);

    output += '</table>';
    $('#container').append(StudentsTable);
  }

}(jQuery));
