import { useEffect, useRef, useState } from "react"
import { add, subtract, multiply, divide, power, sqrt } from "./functions"
import "./calculator.css"

import Svgduck from './assets/duck.svg';

function App() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  type Operation = "+" | "-" | "*" | "/" | "^" | "√" | null;
  const [operation, setOperation] = useState<Operation>(null)
  const [text, setText] = useState<string>("")

  const digit: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const action: string[] = ["-", "+", "*", "/", "^"];

  const handleButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement

    //получение нажатой кнопки
    const but = target.textContent;

    // нажата кнопка AC
    if (target.classList.contains("btn-c")) {
      setA("");
      setB("");
      setOperation(null);
      setText("");
      return;
    }

    // если на экране ошибка
    if (text === "Ошибка") {
      if (digit.includes(but)) {
        setA("");
        setB("");
        setOperation(null);
        setText("");
      }
      if (action.includes(but) || but === "√") {
        setA("");
        setB("");
        setOperation(null);
        setText("");
      }
    }

    // если это число
    if (digit.includes(but)) {
      if (operation === null || operation === "√") {
        if (but === "." && a.includes(".")) return

        if ((a === "0" || a === "-0") && but !== ".") {
        setA(but);
        setText(prev => prev.slice(0, -1) + but);
        return;
      }

        setA(prev => prev + but);
        setText(prev => prev + but);
      } else {
        if (but === "." && b.includes(".")) return

        if ((b === "0" || b === "-0") && but !== ".") {
          setB(but);
          setText(prev => prev.slice(0, -1) + but);
          return;
        }

        setB(prev => prev + but);
        setText(prev => prev + but);
      }
      return;
    }

    // если это операция
    if (action.includes(but)) {
      if (but === "-" && !a) {
        setA("-");
        setText(prev => prev + "-");
        return;
      }

      if (but === "-" && a && operation && !b && operation !== "√") {
        if (but === "-" && !b) {
          setB("-");
          setText(prev => prev + "-");
        }
        return;
      }

      if (operation === "√") return;

      // если операция уже есть и b пустое, просто заменяем операцию
      if (a && operation && !b) {
        setOperation(but as Operation);
        setText(prev => prev.slice(0, -1) + but);
        return;
      }

      if (a && a !== "-" && !b) {
        setOperation(but as Operation);
        setText(prev => prev + but);
      }
      return;
    }

    // если это корень
    if (but === "√") {
      if (!operation && !a && !b) {
        setOperation(but)
        setText(prev => prev + but);
      }
      return
    }

    // если это равно
    if (but === "=") {

      const numA = parseFloat(a)
      const numB = parseFloat(b)

      if (a === "" || a === "-") {
        setText("")
        setA("")
        return;
      }

      if (!operation) {
        setText(String(numA))
        setOperation(null)
        return;
      }

      if (operation !== "√" && (b === "" || b === "-")) {
        setText(String(numA))
        setB("")
        setOperation(null)
        return;
      }

      // округление результата
      const roundResult = (num: number) => {
        return Math.round(num * 1e8) / 1e8;
      }

      let res: string | number = "";

      switch (operation) {
        case "+":
          res = roundResult(add(numA, numB));
          break;
        case "-":
          res = roundResult(subtract(numA, numB));
          break;
        case "*":
          res = roundResult(multiply(numA, numB));
          break;
        case "/":
          if (numB === 0) {
            res = "Ошибка";
          } else {
            res = roundResult(divide(numA, numB));
          }
          break;
        case "^":
          res = roundResult(power(numA, numB));
          if (!isFinite(res) || isNaN(res)) {
            res = "Ошибка";
          } else {
            res = roundResult(res);
          }
          break;
        case "√":
          if (numA < 0) {
            res = "Ошибка";
          } else {
            res = roundResult(sqrt(numA));
          }
          break;
        default:
          res = "Ошибка";
          break;
      }

      setText(String(res));
      if (typeof res === "number") {
        setA(String(res));
      } else {
        setA("");
      }
      setB("");
      setOperation(null);
      return;
    }
  }

  const resultRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollLeft = resultRef.current.scrollWidth
    }
  }, [a, b])

  return (
    <div className="page-container">
     <img src={Svgduck} className="icon-duck" />
     <img src={Svgduck} className="icon-duck icon-1" />
     <img src={Svgduck} className="icon-duck icon-2" />
      <div className="snes-container">
        <div className="snes-input" ref={resultRef}>
          {text}
        </div>

        <div className="button-grid buttons" onClick={handleButtonClick}>
          <button className="snes-button btn-c">AC</button>
          <button className="snes-button btn-operation">√</button>
          <button className="snes-button btn-operation">^</button>
          <button className="snes-button btn-operation">/</button>

          <button className="snes-button btn-light">7</button>
          <button className="snes-button btn-light">8</button>
          <button className="snes-button btn-light">9</button>
          <button className="snes-button btn-operation">*</button>

          <button className="snes-button btn-light">4</button>
          <button className="snes-button btn-light">5</button>
          <button className="snes-button btn-light">6</button>
          <button className="snes-button btn-operation">-</button>

          <button className="snes-button btn-light">1</button>
          <button className="snes-button btn-light">2</button>
          <button className="snes-button btn-light">3</button>
          <button className="snes-button btn-operation">+</button>

          <button className="snes-button btn-light">0</button>
          <button className="snes-button btn-light">.</button>
          <button className="snes-button equal-button">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;