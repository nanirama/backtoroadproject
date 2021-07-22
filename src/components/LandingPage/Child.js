import React, { useRef, useEffect } from "react"

const ChildComponent = ({ color, observeElement }) => {
  const ref = useRef()

  useEffect(() => {
    if (ref.current) observeElement(ref.current)
  }, [observeElement])

  return (
    <div
      className={color}
      ref={ref}
      style={{
        width: "100vw",
        height: "100vh",
        background: color
      }}
    >
      {color}
    </div>
  )
}

export default ChildComponent