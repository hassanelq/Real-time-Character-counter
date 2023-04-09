let totalChars = document.getElementById("totalChars");
let remain = document.getElementById("remain"); 
let text = document.getElementById("textarea");
let maxlengh = text.getAttribute("maxlength");
remain.innerHTML = maxlengh;

text.addEventListener('input', myfunction = () => {
    totalChars.innerHTML = text.value.length  ;
    remain.innerHTML = maxlengh - text.value.length  ;
});