


var list = document.getElementById("id");
document.addEventListener('input', function(e){
    
    e.preventDefault();
    const key = e.target.value
    const value = e.target.options[e.target.selectedIndex].text
    
    saveName(value,key);
})



function saveName(v,k){
    
    localStorage.setItem(v,k)
}