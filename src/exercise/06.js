// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input 
 
 //criando uma ref, um recurso do React para acessar o contrúdo
 //de elementos de formulario
  const usernameEl = React.useRef()

  //Criar uma varável de estado do react
  //uma carável de estado mantém uma informação mesmo que o conteúdo da pagina
  //seja atualizado
  //Para ler o conteúdo da variável de estado, podemos acessá-la diretamente.
  //no entanto, para alterar seu conteúdo, usamos uma função set.

  //error-> variáve de estado
  //setError-> função de atualização da varável de estado
  //a função useState aceita um parametro que é o Valor inicial da variavel
  //de estado. ou seja, nesse caso, error tem um valor inicial de string vazia

  const[msg,setMsg] = React.useState('')
  const[username,setUsername]=React.useState('')

  function handleChange(event){
    //capturando o valor do input
    const val = event.target.value

    //Armazena na variavel de estado o valor do input já convertido
    //para minusculas
    setUsername(val.toLowerCase())
    // //o input será válido se seu conteudo for identico 
    // //ao proprio conteudo em minusculas
    // const isValid = (val === val.toLowerCase())

    // //atualizando o estado
    // setMsg(isValid? '':'O valor informado deve estar em minúsculas.')

}
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        {/*Associando o ref usernameEl ao input */}
        <input ref={usernameEl} id="username" type="text" onChange={handleChange} value={username} />
      </div>
      {/*O conteudo da variavel de estado pode ser lido sem necessidade de função auxiliar  */}
  <div style={{color:'red'}}>{msg}</div>
      <button type="submit">Submit</button>
    </form>
  )

  function handleSubmit(event){
    event.preventDefault()
   // const username = document.querySelector('#username').value
   const username = usernameEl.current.value
   onSubmitUsername(username)
    //Previne o recarregamento do formulario
}

}



function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

//Quando o formulário for enviado (submit)
//Associando a la HTML
//document.querySelector('form').addEventListener('submit',handleSubmit)

export default App
