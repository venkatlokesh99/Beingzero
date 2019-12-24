//page fully loaded
//1.get data from sever using /data
// 2. show data in html
$(document).ready(function(){
    $.getJSON("/data",function(d){
        $("#name").text(d.name);
        $("#rollno").text(d.rollno);
    });
});