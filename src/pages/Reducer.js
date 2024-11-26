import React from 'react'

function Reducer() {
  return (
    <div className="info">
    <h2>Reducer</h2>
    <textarea clos="80" rows="15" defaultValue={

      `   
        State값을 컨트롤할 때 사용함.
        ㄴ  값을 추가, 수정, 삭제 , 값을 가져오기 (set)에 대한 프로그래밍을 
            reducer안에서 처리 

        #사용법
        import {useReducer} from 'react'

        컴포넌트 
        ㄴ state 컨트롤 함수 ▼ 
        funcion reducer(state값, action){

            return action; -> 이렇게 되면 dispatch의 값이 100 된 것을 적용함. 

            }
        
        ㄴ const [state, dispatch] = useReducer(reducer, []);
            dispatch(저장 =>100)
            dispatch(수정 =>100)
            dispatch(삭제 =>100)
            []의 값은 자동적으로 state가 가지고 있게 된다.
            ㄴ 이거를 실제로 어떻게 사용을 하느냐. (아래 참고 )
            dispatch({case:'add', data:추가할 값})
            ㄴ 추가할 값 => {id:1, name:'차민규', age:100}

            dispatch({case:'edit', data:수정할 값})
            ㄴ {id:0, name:'홍길동', age:0}
            >> 이렇게되면 홍길동을 찾아서 차민규로 바꿔라 라고 적용이 됨.

            dispatch({case:'del', data:찾아서 삭제할 값})
            >> {id:0}
            왜 아이디만 주냐, 어차피 삭제할 건데 id 기준으로 빼라 ㅇㅇ
            그럼 갑자기 궁금한 점: id가 아니라 name만 삭제하고 싶으면 {name} 이렇게 해도 되는지? 

            예시)
            state = [
                {id:0, name:'홍길동', age:100},
            ]

            ※ 주의 
            - state 값이 변경되면 업데이트 발생함 (반드시 함수를 활용)

            `
    }>

    </textarea>
  </div>
  )
}

export default Reducer