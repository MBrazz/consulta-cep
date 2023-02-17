"use strict"

const showData = (results) => {
  if (results.cep !== undefined) {
    table = `<tr>
                <th>UF</th>
                  <td>${results.uf}</td>
                <th>Cidade</th>
                  <td>${results.localidade}</td>
                <th>Logradouro</th>
                  <td>${results.logradouro}</td>
                <th>Bairro</th>
                  <td>${results.bairro}</td>
              </tr>`
  } else {
    table = ""
    alert("CEP não encontrado!")
  }

  document.getElementById("dados").innerHTML = table
}

let table = `<tr>
          </tr>`

const Search = function () {
  let search = cep.value.replace("-", "")
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  }

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((data) => showData(data))
    })
    .catch(
      (err) => console.log("Erro: " + err.message),
      ((table = `<tr>
          </tr>`),
      (document.getElementById("dados").innerHTML = table))
    )
}

document.querySelector("#submit").onclick = function () {
  Search()
}

const cep = document.querySelector("#cep")
cep.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
    Search()
  }
})

var zipMask = IMask(document.querySelector("#cep"), {
  mask: "00000-000",
  // definitions: {
  //   "#": /[1-6]/,
  // },
})
