import React, {useContext} from 'react'

const Context = () => {
  return (
    <div className="info">
    <h2>useContext()</h2>
    <textarea clos="80" rows="15" defaultValue={

       // const a = useContext={MyContext};

      `   
        ※ 전역에서 상태 관리
        ※ 자손, 후손 컴포넌트에서 전역값을 활용

        #사용법

        부모(A.js)
        import {createContext} from 'react';
        const MyContext = createContext();

        <MyContext> ---------->>얘가 최상위의 부모가 되는 거임.
            <List/> ---------->>얘네가 자손
            <Insert/> -------->>위와 동일
        </MyContext>

        ===================================================
        질문1) 그러면 List랑 Insert에 값을 적용시키고 활용해야한다면 어떻게 값을 넣어주는 것인가? 

        <MyContext.Provider value={  {state. dispatch}  }>
            <List/> 
            <Insert/> 
        </MyContext.Provider>
        ㄴexport {MyContext};
        > 익스폴트 안 하면 자손이 받을 수도 없음.

        자손 (List.js)
        ㄴ import {MyContext} from 'A.js';
        ㄴ import {useContext} from 'react';
        
        ㄴ function List(){
                let a = useContext(MyContext);
                > 뜻 풀이: useContext에서 MyContext 값을 사용하겠다.
                > a가 가지고 있는 값: value의 {}값<
                
                a => {state:[100], dispatch:f()}
                a.state
                a.dispatch
            }

      `
    }>

    </textarea>
  </div>
  )
}

export default Context