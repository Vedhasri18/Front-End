function addRecommendation(){
    var msg=document.getElementById("Message").value;
    if(msg.trim()!= "" && msg!=null){
        showPopup();
    }
    else{
        alert("Please enter a vaild recommendation");
    }
    var Recommendation = document.createElement("div");
    Recommendation.setAttribute("Class","Para");
    Recommendation.className = "para";
    var para =document.createElement("p");
    para.textContent=msg;
    Recommendation.appendChild(para);
    document.getElementById("Recommendations").appendChild(Recommendation);
}
function showPopup(){
    if(true){
        document.getElementById("popup").style.visibility = "visible";
    }
    else{
        document.getElementById("popup").style.visibility = "hidden";
    }
}