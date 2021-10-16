document.querySelector(".h-p").addEventListener("click", function () {
    //location.href = "https://www.google.com/";
    alert("Thanks for enrolling our course !!!");
    
});
var len = document.querySelectorAll(".icon").length ;

for (let i = 0; i < len; i++) {
    document.querySelectorAll(".icon")[i].addEventListener("click", function () { alert("Its Working !"); });
    
}


  