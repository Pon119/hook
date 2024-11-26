// Etc.js

import React, {
  useState,
  useMemo,
  useCallback,
  useTransition,
  useEffect,
  useDebugValue,
} from "react";
import useCustomHook from "./useCustomHook";
import Test from "./Test";

const Etc = () => {
  let url =
    "https://api.themoviedb.org/3/movie/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967";
  const { state, load, error } = useCustomHook(url);

  const [hard, setHard] = useState(250);
  const [easy, setEasy] = useState(0);

  const hardCalc = useCallback((n) => {
    for (let i = 0; i < 99999999; i++) {}
    console.log("어려운 계산");
    return n * 1000000;
  }, []);

  const easyCalc = (n) => {
    return n * 1;
  };

  let hardTotal = useMemo(() => {
    return hardCalc(hard);
  }, [hard]);

  let easyTotal = easyCalc(easy);

  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);

  let [ispen, setIspen] = useTransition();

  useEffect(() => {
    setIspen(() => {
      setNum1(hard + 10);
    });
    setNum2(hard + 20);
  }, [hard]);

  return (
    <div className="info">
      <h2>Custom Hook</h2>
      <textarea
        clos="80"
        rows="15"
        defaultValue={`
            #개념 
            커스텀 훅은 작업자가 반복되는 유형의 로직을 훅 형태로 만들어
            코드의 가독성과 재사용성의 효율을 높이는 목적으로 사용됨. 

            #규칙 = hook 파일명은 반드시 use로 시작해야함. 
          
            #만드는 법(useCustomHook.js)

            const useCustomHook = () => {
              return 훅 실행 시 보내줄 값
            }
            export default useCustomHook

            #사용법
            import useCustomHook from "./useCustomHook";

            const 변수명 = useCustomHook();

          `}
      ></textarea>
      <h2>useMemo(값)</h2>
      쉬운 계산기
      <br />
      <input type="text" onChange={(e) => setEasy(e.target.value)} />
      <span>{easyTotal}</span>
      어려운 계산기
      <br />
      <Test easy={easy} />
      <input type="text" onChange={(e) => setHard(e.target.value)} />
      <span>{hardTotal}</span>
      <h2>useCallback(함수)</h2>
      <h2>useTransition(지연)</h2>
      <h2>useDeferredValue</h2>
      <Def />
    </div>
  );
};

export default Etc;

function Def() {
  let init = new Array(1000).fill().map((a, i) => i);

  let [input, setInput] = useState();
  let deferredValue = useDebugValue(input); 

  let [list, setList] = useState([]);

  let filteredItems = useMemo (()=>{
    
    return init.filter((num)=>num.toString().includes(input));

  },[input])

  return (
    <>
      <input type="text" onChange={(e)=>setInput(e.target.value)} />

      <ul>
        {filteredItems.map((o, k) => (
          <li key={k}>{o}</li>
        ))}
      </ul>
    </>
  );
}
