import React, { useRef } from 'react'

const Count = () => {
    const renderCount = useRef(0);
    console.log(renderCount);
  return (
    <div>Count

        <p>Nothing changed but Ive now Rendered:
            <span>{renderCount.current++}</span>
        </p>
    </div>
  )
}

export default React.memo(Count)