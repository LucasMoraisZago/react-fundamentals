// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// const smallBox = <div className="box box--small" style={{backgroundColor:"lightblue", 
// fontStyle:'italic'}}>small lightblue box</div>
// const mediumBox = <div className="box box--medium" style={{backgroundColor:"pink", 
// fontStyle:'italic',filter:'brightness(70%)'}}>medium pink box</div>
// const largeBox = <div className="box box--large" style={{backgroundColor:"orange", 
// fontStyle:'italic'}}>large orange box</div>
//se o usuario não especificar o tamanho a caixa será média
function Box({color='lightblue', style={}, size = 'medium',...props}){
    const className ='box box--'+ size
    return <div className={className} style={{fontStyle:'italic', backgroundColor: color, ...style}}{...props}></div>
}

function App() {
  return (
    <div>
        {
        /*
            Em JSX, estilos CSS são passados como objetos para o elemento.
            o nome dos atributos das propriedades dp objeto , mas escritas em camelCase.
            O valor das propriedades vai entre aspas, caso não seja númerico.
        */
        }
      <div style={{marginTop: '20px', backgroundColor: 'blue'}}>Teste</div>
      <Box size="small"  id="box1">Small Lightblue box</Box>
      <Box color='pink' id="box2">Medium pink box</Box>
      <Box color = 'orange' size="large"  id="box3">Small orange box</Box>

    </div>
  )
}

export default App
