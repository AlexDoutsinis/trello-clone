import React from 'react'
import { Column } from './Column'
import { Card } from './Card'
import { AppContainer } from './styles'
import { AddNewItem } from './AddNewItem'
import { useAppState } from './AppStateContext'

function App() {
  const { state, dispatch } = useAppState()
  console.log(state.lists.length)

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: 'ADD_LIST', payload: text })}
      />
    </AppContainer>
  )
}

export default App
