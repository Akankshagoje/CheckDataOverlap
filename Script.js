/*
This Javascript file check the overlap dates of given user two inputs
*/
function checkOverlap() {
    var start1 = new Date(document.getElementById("start1").value);
    var end1 = new Date(document.getElementById("end1").value);
    var start2 = new Date(document.getElementById("start2").value);
    var end2 = new Date(document.getElementById("end2").value);
  
    if (isValidDate(start1) && isValidDate(end1) && isValidDate(start2) && isValidDate(end2)) {
      if (isRangeValid(start1, end1) && isRangeValid(start2, end2)) {
        if (start1 <= end1 && start2 <= end2) {
          if (start1 <= end2 && start2 <= end1) {
            document.getElementById("result").innerText = "Date ranges overlap.";
          } else {
            document.getElementById("result").innerText = "Date ranges do not overlap.";
          }
        } else {
          document.getElementById("result").innerText = "Invalid date range: End date must be after or equal to start date.";
        }
      } else {
        document.getElementById("result").innerText = "Invalid date range: Start date must be before end date.";
      }
    } else {
      document.getElementById("result").innerText = "Invalid date format.";
    }
  }
  
  function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
  }
  
  function isRangeValid(start, end) {
    return start <= end;
  }
  