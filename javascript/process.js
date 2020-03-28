
function results() {

    let name = document.getElementById('name').value;
    let userName = document.getElementById('username').value;

    if (document.getElementById('male').checked) {
    gender = document.getElementById('male').value;   
    } else if (document.getElementById('female').checked) {
    gender = document.getElementById('female').value;
    } else { 
    gender = document.getElementById('others').value;
    }   

    let skills=document.getElementsByName('skills');
    let selectedSkills="";
    for(let i=0; i<skills.length; i++){
        if(skills[i].type=='checkbox' && skills[i].checked==true)
            selectedSkills+=skills[i].value+"\n";
    }
    
    let college = document.getElementById("college");
    
   
    
    
    let contactNumber = document.getElementById('ph number').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
    let state = document.getElementById('state').value
    let country = document.getElementById('country').value
    
    document.write("<strong> Name: </strong> &nbsp" + name + "<br/>");
    document.write("<strong> UserName: </strong> &nbsp" + userName + "<br/>");
    document.write("<strong> Gender: </strong> &nbsp" + gender + "<br/>");
    document.write("<strong> Contact Number: </strong> &nbsp" + contactNumber + "<br/>");
    document.write("<strong> email: </strong> &nbsp" + email + "<br/>");
    document.write("<strong> Address: </strong> &nbsp" + address + "<br/>");
    document.write("<strong> State:  </strong> &nbsp" + state + "<br/>");
    document.write("<strong> Country: </strong> &nbsp" + country + "<br/>");
    
    document.write("<strong> skills: </strong> &nbsp" + selectedSkills  +  "<br/>");
    document.write("<strong> college: </strong> &nbsp"  + college.options[college.selectedIndex].text );


    
}

