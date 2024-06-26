import { useState } from 'preact/hooks'

export function Counter() {
  const [value, setValue] = useState(0)

  return (
    <>
      <div>Counter: {value}</div>
      <button class="pure-button" onClick={() => setValue(value + 1)}>
        Increment
      </button>
      <button class="pure-button" onClick={() => setValue(value - 1)}>
        Decrement
      </button>
    </>
  )
}
