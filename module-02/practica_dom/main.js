function crearTarjeta(event){
    event.preventDefault()

    let title = event.target.title.value
    let text = event.target["text-box"].value

    let parent = document.getElementById("cards")
    
    let code = "<article>"
    code += "<h3>" + title + "</h3>"
    code += "<p>" + text + "</p>"
    code += "</article>"


    console.log(code)
    parent.innerHTML += code
}

function crearTarjetaB(event){
    event.preventDefault()

    let title = event.target.title.value
    let text = event.target["text-box"].value

    let parent = document.getElementById("cards")
    
    let article = document.createElement("article")
    let h3 = document.createElement("h3")
    let p = document.createElement("p")

    h3.innerText = title
    p.innerText = title

    h3.style.color= "red"

    article.appendChild(h3)
    article.appendChild(p)

    parent.innerHTML += code
}