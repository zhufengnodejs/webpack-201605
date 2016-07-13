window.onload = function(){
   var xhr = new XMLHttpRequest();
   xhr.open('GET','/api/books',true);// /books.json
   xhr.onreadystatechange = function(){
       if(xhr.readyState == 4 && xhr.status== 200){
           document.write(xhr.responseText);
       }
   }
   xhr.send();
}