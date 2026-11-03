function changeColor(element){
    if(element.dataset.changed === "true"){
        element.style.backgroundColor = "";
        element.style.color = "";
        element.dataset.changed = "false";
    } else {
        element.style.backgroundColor = "#c37272";
        element.style.color = "#16025e";
        element.dataset.changed = "true";
    }
}

const firstElement = document.getElementById("firstElement");
firstElement.addEventListener("click", function(){
    changeColor(firstElement);
});

const secondElement = document.querySelector("p.secondElement");
secondElement.addEventListener("click", function(){
    changeColor(secondElement);
});

const imageContainer = document.getElementById("image-container");
document.getElementById("add-button").addEventListener("click",function(){
    if(!document.getElementById("image")){
        const newImage = document.createElement("img");
        newImage.id = "image";
        newImage.src = "rome.jpg";
        newImage.alt = "rome";        
        newImage.style.width = "600px";
        imageContainer.appendChild(newImage);
    }
    
});

document.getElementById("delete-button").addEventListener("click",function(){
    const currentImage = document.getElementById("image");
    if(currentImage){
        currentImage.remove();
    }
});

const imgWidth = 600

document.getElementById("increase-button").addEventListener("click",function(){
    const currentImage = document.getElementById("image");
    if(currentImage){
        currentImage.width+=50;
    }
});
document.getElementById("decrease-button").addEventListener("click",function(){
    const currentImage = document.getElementById("image");
    if(currentImage){
        currentImage.width-=50;
    }
});