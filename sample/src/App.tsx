import "./App.css";
import React, { useCallback, useState } from "react";

const Button: any = React.memo(({ onClick }: any) => {
  console.log("ボタンコンポーネントを呼び出し");
  return <button onClick={onClick}>子ボタン</button>;
});

const App = () => {
  const [count, setCount] = useState(0);
  console.log("Appコンポーネントを呼び出し");

  const onClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>カウントアップ</button>
      <Button onClick={onClick} />
    </>
  );
};

export default App;
