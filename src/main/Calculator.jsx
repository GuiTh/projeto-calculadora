import React, {Component} from "react";
import './Calculator.css'

import Button from '../components/Button'
import Display from "../components/Display"

/*exportando o componente calculadora
e criando a classe render para renderizar a calculadora (a classe render precisa de um return no fim)
*/

const initialState = {
    displayValue: 0,
    displayFalse : false,
    operation: null,
    values: [0,0],
    current: 0
}

export default class Calculator extends Component{
    

    state = {...initialState}

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind()
        this.setOperation = this.setOperation.bind()
        this.addDigit = this.addDigit.bind()

    }

    clearMemory(){
        this.setState({...initialState})
    }
    setOperation(operation){
        if(this.state.current === 0){
            this.setState({operation, current: 1, clearDisplay:true})
        }else{
            const currentOperation = this.state.operation
            const values = [...this.state.values]
            
            switch(currentOperation){
                case '+':
                    values[0] = values[0] + values[1]
                    break
                case '-':
                    values[0] = values[0] + values[1]
                    break
                case '/':
                    values[0] = values / values[1]
                    break
                case '*':
                    values[0] = values[0] * values[1]
                    break
                default:
            }

        }
    }
    addDigit(n){
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0'
        || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay:false})

        if(n !== '.'){
            const  i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
            console.log(values)
        }
    }

    render(){
        return(
/*isso nao é html, é jsx que sera transpilado para js puro */
    <div className="calculator">
        <Display value={this.state.displayValue}/>
        <Button label="AC" click={this.clearMemory} triple/>
        <Button label="/" click={this.setOperation} operation/>
        <Button label="7" click={this.addDigit}/>
        <Button label="8" click={this.addDigit}/>
        <Button label="9" click={this.addDigit}/>
        <Button label="*" click={this.setOperation} operation/>
        <Button label="4" click={this.addDigit}/>
        <Button label="5" click={this.addDigit}/>
        <Button label="6" click={this.addDigit}/>
        <Button label="-" click={this.setOperation} operation/>
        <Button label="1" click={this.addDigit}/>
        <Button label="2" click={this.addDigit}/>
        <Button label="3" click={this.addDigit}/>
        <Button label="+" click={this.setOperation} operation/>
        <Button label="0" click={this.addDigit} double/>
        <Button label="." click={this.addDigit}/>
        <Button label="=" click={this.setOperation} operation/>
    </div>
        )
    }
}