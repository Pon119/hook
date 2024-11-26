// Effect.js
import React, { useEffect, useState } from "react";

const Effect = () => {




  return(
    <div className="info">
      <h2>useEffect()</h2>
      <textarea clos="80" rows="15" defaultValue={

        `   
        
        [의존성 배열을 이용한]
        1. 업데이트 시에 실행을 막기 위한 용도 = []
        2. 내가 원하는 state 값이 변경될 때만, 실행 =[state] 
        
        
        [마운트, 언 마운트 시점]
        3. 마운트 = 의존성 배열과 상관 없이, 무조건 최초 1번은 실행됨.
        4. 언 마운트 시점 = 값을 초기화 하거나, 이벤트를 제거 용도로 실행됨.
        
        #사용법
        import {useEffect} from 'react'
        
        컴포넌트.js
        ㄴ useEffect(function(){
          
          //마운트
          
          return function(){//언마운트}

        },[]);

        `
      }>

      </textarea>
    </div>
  )

};

export default Effect;
