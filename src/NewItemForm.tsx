import React, { useState } from 'react'

import {
  NewItemFormContainer,
  NewItemButton,
  NewItemInput,
} from './styles'
import { useFocus } from './hooks/useFocus'

interface NewItemFormProps {
  onAdd(text: string): void
}

function NewItemForm({ onAdd }: NewItemFormProps) {
  const [text, setText] = useState('')
  const inputRef = useFocus()

  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
      />
      <NewItemButton onClick={() => onAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  )
}

export default NewItemForm
