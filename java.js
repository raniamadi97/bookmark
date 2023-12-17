
var siteName = document.getElementById('bookmarkName');
var webUrl= document.getElementById('bookmarkURL');



if (localStorage.getItem('MyWebArray') != null){

    webArray= JSON.parse(localStorage.getItem('MyWebArray'))
    displayTable();

}else{

    var webArray = [];
}


// Main function

function addMyWeb(){
  

 var websiteName = siteName.value.trim();
 var websiteUrl = webUrl.value.trim();

 if (!websiteName || !websiteUrl) {
     alert("Please enter both a name and a URL.");
     return; // Stop the function if input is not valid
 }

   if (!/^.{3,}$/.test(websiteName)) {
    alert("Site name must contain at least 3 characters.");
    return; // Stop the function if input is not valid
}

 if (!/^https?:\/\//i.test(websiteUrl)) {
     // If so, prepend "https://"
     websiteUrl = "https://" + websiteUrl;
 }

 if (!/.com/i.test(websiteUrl)) {
     alert("Please enter a valid URL with '.com'.");
     return; // Stop the function if input is not valid
 }


 //     ====== Object Name ======
 var websiteInfo = {
     name: websiteName,
     url: websiteUrl,
 };


    // add the object to the Array

    webArray.push(websiteInfo);

    localStorage.setItem('MyWebArray',JSON.stringify(webArray));

    displayTable();
    clear();


    }





function displayTable(){
    var cartona ="";
    for (var i = 0 ; i < webArray.length; i++ ){

        cartona+=`
   <tr>
        <td> ${webArray[i].name} </td>
        <td> ${webArray[i].url} </td>
        <td><button  onclick="visitWebsite(${i})"  class="btn btn-visit btn-primary">
        <i class="fa-solid fa-eye"></i>
            Visit
        </button></td>

        <td><button onclick="deleteWeb(${i})" class="btn btn-delete btn-danger">
            
            <i class="fa-solid fa-trash"></i>  
            Delete</button></td>
        
  </tr>           
        `
       
    }

    document.getElementById('table-Content').innerHTML= cartona;
}

function clear(){


    siteName.value="";
    webUrl.value="";
}

function deleteWeb(index){

    webArray.splice(index,1)
    localStorage.setItem('MyWebArray',JSON.stringify(webArray));

    displayTable();


}

function visitWebsite(index){

    window.open(webArray[index].url, '_blank');
   

}

