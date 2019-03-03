import React, { useContext, useReducer, useState, useMemo } from "react"

const Count = React.createContext()

const Consumer = React.memo(function Consumer() {
  // console.log("Consumer::render")

  const [stateFromProvider, dispatch] = useContext(Count)
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        stateFromProvider: {stateFromProvider}
      </button>
    </div>
  )
})

export const InBetween = React.memo(function InBetween() {
  // console.log("InBetween:render")

  const [stateLocalToInBetween, setStateLocalToInBetween] = useState(true)
  return (
    <>
      <button onClick={() => setStateLocalToInBetween(!stateLocalToInBetween)}>
        {stateLocalToInBetween ? "Nice" : "Nope"}
      </button>
      <Consumer />
    </>
  )
})

export const Provider = () => {
  // console.log("Provider::render")

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.payload
      default:
        throw new Error("Not like this!")
    }
  }, 0)

  const [stateLocalToProvider, setStateLocalToProvider] = useState(0)

  return (
    // Local state in a provider doesn't necessarily happen, but at least it's
    // possible to work with using 'memoize'.
    <Count.Provider value={useMemo(() => [state, dispatch], [state])}>
      <InBetween />
      <button onClick={() => setStateLocalToProvider(stateLocalToProvider + 1)}>
        stateLocalToProvider: {stateLocalToProvider}
      </button>
    </Count.Provider>
  )
}
