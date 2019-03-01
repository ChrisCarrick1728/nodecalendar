var calendar = require('node-calendar')

function app(req, res) {
  // load app....
  var date = req.url.split('/')
  console.log(date)
  // Create a new calendar
  // Calenday(6) -> set's first day of week to sunday
  // monthdayscalendar(2019, 2) -> returns object with full month
  var cal = new calendar.Calendar(6).monthdayscalendar(date[1], date[2]);
  console.log(cal)
  res.write("<table>");
  for (var i = 0; i < cal.length; i++) {
    res.write('<tr>')
    for (var d = 0; d < cal[i].length; d++) {
      res.write('<td>' + (cal[i][d] != '0' ? cal[i][d] : '') + '</td>')
    }
    res.write('</tr>')
  }
  res.write('</table>')
  res.end()
}

module.exports = app
