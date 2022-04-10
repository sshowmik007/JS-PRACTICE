const body = document.body
// body.append("helllo World" , "how are you?")

const div =document.createElement("div")
// div.innerText= "Hello world"
// div.textContent= " <strong> hello world 2  </strong>"
div.innerHTML= " <strong> hello world 2  </strong>"

body.append(div)

