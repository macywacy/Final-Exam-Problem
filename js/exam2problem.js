function getlist() //section 1
{
 var listRequest= new XMLHttpRequest();
 var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCategories";
 
     listRequest.onreadystatechange = function()
    {
        if (listRequest.readyState == 4 && listRequest.status == 200)
        {
            var output = JSON.parse(listRequest.responseText);
        GenerateOutput(output);
        }
    };
    
    listRequest.open("GET", url, true);
listRequest.send();
}
function GenerateOutput(result)
{
    var count = 0;
    table = "";
    
    table += ('<th>'+'Category ID'+
              '<th>'+ 'Category Name'+
              '<th>' + 'Category Description');
    
    for (count = 0; count < result.GetAllCategoriesResult.length; count++)
    {
  table += "<tr>";
table += "<td>"+ result.GetAllCategoriesResult[count].CID +"</td>";
table += "<td>"+ result.GetAllCategoriesResult[count].CName +"</td>";
table += "<td>"+ result.GetAllCategoriesResult[count].CDescription +"</td>";
table += "</tr>";
}
document.getElementById("listdisplay").innerHTML=table;
}

function createcat() //section 2
{
 var objRequest = new XMLHttpRequest();
  var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCategory";
   var catname = document.getElementById("catname").value;
   var catdescript = document.getElementById("catdescription").value;
   var newcat = '{"CName":"' + catname + '","CDescription":"' + catdescript +'"}';
   objRequest.onreadystatechange = function()
   {
    if (objRequest.readyState == 4 && objRequest.status == 200)
    {             var result1 = JSON.parse(objRequest.responseText);
    OperationResult1(result1);
    }}; 
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcat);
    }
    function OperationResult1(output)
    {
    if (output.WasSuccessful == 1)
    { document.getElementById("res").innerHTML = "The operation was successful!" + "<br>";}
    else 
    { document.getElementById("res").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;}

    }


function updatecategory() //section 3
{
 var objRequest = new XMLHttpRequest();
  var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateCatDescription";
   var cid = document.getElementById("cid").value;
   var catdescript2 = document.getElementById("catdescript").value;
   var newcat = '{"CID": '+ cid +',"CDescription":"'+ catdescript2 +'"}';
   objRequest.onreadystatechange = function()
   {
    if (objRequest.readyState == 4 && objRequest.status == 200)
    {             var result = JSON.parse(objRequest.responseText);
    OperationResult(result);
    }}; 
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcat);
    }
    function OperationResult(output2)
    {
    if (output2.WasSuccessful == 1)
    { document.getElementById("res2").innerHTML = "The operation was successful!" + "<br>" + output2.Exception;}
    else if (output2.WasSuccessful ==0)
    { document.getElementById("res2").innerHTML = "Operation failed with an unspecified error" + "<br>" + output2.Exception;}
    else if (output2.WasSuccessful ==-2)
    { document.getElementById("res2").innerHTML = "Operation failed because the data string supplied could not be deserialized into the service object!" + "<br>" + output2.Exception;}
    else if (output2.WasSuccessful ==-3)
    { document.getElementById("res2").innerHTML = "Operation failed because a record with the supplied order ID could not be found!" + "<br>" + output2.Exception;}

    }










function deletecat() //section 4
{alert("CONFIRM");


var objRequest= new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCategory/";
    url += document.getElementById("catid").value;
objRequest.onreadystatechange = function()
{
if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
        GenerateOutput3(output);
    }
};
objRequest.open("GET", url, true);
objRequest.send();
}
function GenerateOutput3(result3)
{
if (result3.DeleteCategoryResult.WasSuccessful == 1)
    { document.getElementById("res3").innerHTML = "The operation was successful!";}
    else
    { document.getElementById("res3").innerHTML = "The operation was not successful!";}
     
}




function menuchoice() 
{

if (document.getElementById("menu").value=="Categories")
{

document.getElementById("section1").style.display="block";
document.getElementById("section2").style.display="none";
document.getElementById("section3").style.display="none";
document.getElementById("section4").style.display="none";
document.getElementById("section5").style.display="none";

}
else if (document.getElementById("menu").value=="Create Category")
{

document.getElementById("section2").style.display="block";
document.getElementById("section1").style.display="none";
document.getElementById("section3").style.display="none";
document.getElementById("section4").style.display="none";
document.getElementById("section5").style.display="none";
}
else if (document.getElementById("menu").value=="Update Category")
{

document.getElementById("section3").style.display="block";
document.getElementById("section2").style.display="none";
document.getElementById("section1").style.display="none";
document.getElementById("section4").style.display="none";
document.getElementById("section5").style.display="none";
}
else if (document.getElementById("menu").value=="Delete Category")
{

document.getElementById("section3").style.display="none";
document.getElementById("section2").style.display="none";
document.getElementById("section1").style.display="none";
document.getElementById("section4").style.display="block";
document.getElementById("section5").style.display="none";
}
else if (document.getElementById("menu").value=="About Me")
{

document.getElementById("section3").style.display="none";
document.getElementById("section2").style.display="none";
document.getElementById("section1").style.display="none";
document.getElementById("section4").style.display="none";
document.getElementById("section5").style.display="block";
}

else
{
document.getElementById("section2").style.display="none";
document.getElementById("section1").style.display="none";
document.getElementById("section3").style.display="none";
document.getElementById("section4").style.display="none";
document.getElementById("section5").style.display="none";
}
}