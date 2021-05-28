var guest_names_array = [];

function submit() {
    var display_guest_array = [];

    var name=document.getElementById("name_of_the_guest").value;
    guest_names_array.push(name);
    console.log(guest_names_array);

    var lenght = guest_names_array.length;
    console.log(lenght);
   

    document.getElementById("display_name_with_commas").innerHTML = guest_names_array;

    

   
}

function show_names() {
    guest_names_array.sort();
    console.log(guest_names_array);
    var display_guest_array = [];

    var lenght = guest_names_array.length;
    console.log(lenght);
    for (var i = 0; i < lenght; i++) {
        display_guest_array.push("<h4> " + guest_names_array[i] + "</h4>");
    }
    console.log(display_guest_array);

    var display_name_without_commas = display_guest_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = display_name_without_commas;
}