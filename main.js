name_of_student_Array=[];
function submit(){
display_student_name_array=[];

    for (var j=1; j<=4; j++){
        var name=document.getElementById("name_of_the_student_"+j).value;
        console.log(name);
        name_of_student_Array.push(name);
    }
    console.log(name_of_student_Array);

    var length=name_of_student_Array.length;
    console.log(length);

    for (var k=0; k<length;k++){
        display_student_name_array.push("<h4>NAME - "+name_of_student_Array[k]+"</h4>");
        console.log(display_student_name_array);
    }

    document.getElementById("display_name_with_commas").innerHTML=display_student_name_array;

    var remove_commas=display_student_name_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    name_of_student_Array.sort();
    console.log(name_of_student_Array);

    display_student_name_sorting=[];
    var length=name_of_student_Array.length;
    console.log(length);

    for (var k=0; k<length;k++){
        display_student_name_sorting.push("<h4>NAME - "+name_of_student_Array[k]+"</h4>");
        console.log(display_student_name_sorting);
    }

    var remove_commas=display_student_name_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}