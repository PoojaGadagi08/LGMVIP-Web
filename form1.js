function addStudent()
{
    console.log("Hello world")
    //var date= document.sample.date.value;
    var name= document.getElementById("FullName").value;
    var email= document.getElementById("Email").value;
    var Mobile_Number= document.getElementById("phoneNumber").value;
    var password= document.getElementById("Password").value;
    var conpassword= document.getElementById("ConfirmPassword").value;

    var gndr= document.getElementsByName("gender");
    var gender = "";
    for(var i =0;i<gndr.length; i++){
        if(gndr[i].checked){
            gender = gndr[i].value;
        }
    }
     


    var tr= document.createElement('tr');
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));

    
    td1.innerHTML=name;
    
    td2.innerHTML= email;

    td3.innerHTML=Mobile_Number;
    td4.innerHTML= password;
    td5.innerHTML= conpassword;

    td6.innerHTML= gender;
   
     

    document.getElementById("tbl").appendChild(tr);
    console.log("Hello World!")


}