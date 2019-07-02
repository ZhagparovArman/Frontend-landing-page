var url_api = "https://reqres.in/api/users/";



async function getData() {

    const response = await fetch (url_api);
    const inform = await response.json();
    
    document.getElementById('first').src= inform.data[0].avatar;
    document.getElementById('first').alt= inform.data[0].first_name + inform.data[0].last_name + "<br>id: " + inform.data[0].id + "<br>Email: " + inform.data[0].email;

	document.getElementById('second').src = inform.data[1].avatar;
    document.getElementById('second').alt = inform.data[1].first_name + inform.data[1].last_name + "<br>id: " + inform.data[1].id + "<br>Email: " + inform.data[1].email;
	
	document.getElementById('third').src = inform.data[2].avatar;
	document.getElementById('third').alt = inform.data[2].first_name + inform.data[2].last_name + "<br>id: " + inform.data[2].id + "<br>Email: " + inform.data[2].email;
	
}


getData();