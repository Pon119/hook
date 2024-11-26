import React from 'react'

function Test({easy}) {
    console.log('test');
  return (
    <div>Test</div>
  )
}

export default React.memo(Test)