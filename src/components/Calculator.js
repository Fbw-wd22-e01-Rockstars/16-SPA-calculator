import React, { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

console.log(eval("385 / 5"));
console.log(eval(5*100/500))
console.log(eval(5%500))

export default function Calculator() {
  const [result, setResult] = useState("Welcome to Calculator");
  const [isCalculated, setIsCalculated] = useState(true);

  /* const calculateResult=(num1,num2,operator)=>{
        let result=0;
        switch(operator){
            case "+":
                    result= num1+num2;
                    break;
            case "-":
                    result=num1-num2;
                    break;
            case "*":
                    result=num1*num2;
                    break;
            case "/":
                     result=num1/num2;
                     break;
            case "%":
                    result=(num1*100/num2);
                    break;
            case "-/+":
                    result=num1*-1;
                    break;
            default:
                    result=0

        }
        return result;
    }    */

  const handleClick = (obj) => {
    if(obj.className==="reset"){
        setResult("0")
        setIsCalculated(true)
    }else{
        if (obj.className === "result") {
            setResult(eval(result));
            setIsCalculated(true);
          } else {
            if (isCalculated) {
              obj.className === "digit"
                ? setResult(obj.value)
                : setResult(obj.value + " ");
      
              setIsCalculated(false);
            } else {
              obj.className === "digit"
                ? setResult(result + obj.value)
                : setResult(result + " " + obj.value);
            }
          }
    }
   
  };

  const buttonsData = [
    { value: "AC", className: "reset" },
    { value: "*-1", className: "operator" },
    { value: "*100/", className: "percentage" },
    { value: "/", className: "operator" },
    { value: "7", className: "digit" },
    { value: "8", className: "digit" },
    { value: "9", className: "digit" },
    { value: "*", className: "operator" },
    { value: "4", className: "digit" },
    { value: "5", className: "digit" },
    { value: "6", className: "digit" },
    { value: "-", className: "operator" },
    { value: "1", className: "digit" },
    { value: "2", className: "digit" },
    { value: "3", className: "digit" },
    { value: "+", className: "operator" },
    { value: "0", className: "digit" },
    { value: ".", className: "digit" },
    { value: "=", className: "result" },
  ];
  return (
    <div>
      <Display result={result} />
      <Keypad buttonsData={buttonsData} handleClick={handleClick} />
    </div>
  );
}
