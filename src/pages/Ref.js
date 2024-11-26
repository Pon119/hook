// Ref.js
import React, { useRef, useState } from "react";

const Ref = () => {
  const [data, setData] = useState([]);
  console.log(data);
  return (
    <div>
      <div>
        <h2>useRef</h2>
        <textarea cols="80" rows="15">
          {`
        import React, {useRef} form 'react';

          #한개의 선택자
          let tag = useRef();
          <div ref={tag}> 내용 </div>

          #다중 선택자
          let tag = useRef([]) <<[]을 추가해서 배열로 만들어주고,;
          <div ref = {  (target)=>  tag.current[0] = target } 내용 1 </div>
          <div ref = {  (target)=>  tag.current[0] = target } 내용 2 </div>
                          ↑ 이런 식으로 커런트를 잡아서 다중으로 선택한다.

          #공통 => 변수.current 활용

        `}
        </textarea>
      </div>

      <Insert setData={setData} />
      <List data={data} />
    </div>
  );
};

function Insert({ setData }) {
  let selector = useRef([]);

  //   ref={selector}

  let userInfo = (e) => {
    e.preventDefault();

    let name = selector.current[0].value;
    let email = selector.current[1].value;
    let content = selector.current[2].value;

    setData((d) => {
      return [...d, { id: Date.now(), name, email, content }];
    });

    e.target.reset();

    selector.current[0].focus();
  };

  return (
    <div>
      <h2>Contect US</h2>
      <div>
        <form onSubmit={userInfo}>
          <p>
            <input
              type="text"
              neme="name"
              ref={(target) => {
                selector.current[0] = target;
              }}
            />
          </p>
          <p>
            <input
              type="text"
              neme="email"
              ref={(target) => {
                selector.current[1] = target;
              }}
            />
          </p>
          <p>
            <textarea
              ref={(target) => {
                selector.current[2] = target;
              }}
            ></textarea>
          </p>
          <p>
            <input type="submit" value="저장하기" />
          </p>
        </form>
      </div>
    </div>
  );
}
function List({ data }) {
  let itemCtrl = (e) => {
    itemTag.current.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  let itemTag = useRef([]);
  let list = data.map((obj, idx) => {
    let date = new Date(obj.id);
    let year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate();

    return (
      <li
        ref={(t) => {
          itemTag.current[idx] = t;
        }}
        onClick={itemCtrl}
      >
        {obj.name}({obj.email})
        <p>
          {obj.content}/{year},{month},{day}
        </p>
      </li>
    );
  });
}

export default Ref;
