const data=document.getElementById("data");
const list=document.getElementById("list");
function add(){
    if(data.value===''){
        alert("Enter a text!");
    }else{
       const li=document.createElement("li") ;
       li.textContent=data.value;
       list.appendChild(li);
       const cancel=document.createElement("cancel");
       cancel.innerHTML="\u00d7";
       li.appendChild(cancel);
    }
    data.value="";
    save();
}
list.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        save();
    }else if(e.target.tagName==="CANCEL"){
        e.target.parentElement.remove();
        save();
    }
    
},false);

function save(){
    localStorage.setItem("data",list.innerHTML);

}
function showTasks(){
    list.innerHTML=localStorage.getItem("data");
}showTasks();
function menu(){
    const nav=document.getElementById("nav");
    nav.classList.toggle("responsive");
}
   document.getElementById('form1').addEventListener('submit', function (event) {
    // Prevent form submission
    event.preventDefault();
    let isValid = true;
    
    // If the form is valid, submit it
    if (isValid) {
        alert("Form submitted successfully!");
        submit();this
    }

});
