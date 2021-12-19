import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Greeting() {
  const [counter, setCounter] = useState(0);
  const counterUp = () => setCounter((cur) => cur + 1);
  useEffect(()=>{
    console.log("Hello!")
    return () => console.log("Bye!")
  }, [])
  useEffect(()=>{
    console.log(`counter ${counter}`)
    return () => console.log(`Bye Bye! ${counter}`)
  }, [counter])
  return (
    <div>
      <h1>Hello {counter}!😀</h1>
      <button onClick={counterUp}>+1</button>
    </div>
  )
}

function AppExample1() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onChange = (e) => setKeyword(e.target.value);
  const counterUp = () => setCounter((cur) => cur + 1);
  const onToggle = () => setShowing((cur) => !cur);
  useEffect(() => console.log(`API Call once`), []);
  useEffect(() => keyword && console.log(`Search For ${keyword}`), [keyword]);
  return (
    <div className="AppExample1">
      <input
        type="text"
        placeholder="Search here..."
        value={keyword}
        onChange={onChange}
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text="Keep going!" />
      <button onClick={counterUp}>+1</button>
      <button onClick={onToggle}>{showing ? "Show" : "Hide"}</button>
      {showing && <Greeting />}
    </div>
  );
}

export default AppExample1;
