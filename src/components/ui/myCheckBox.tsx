import { Checkbox } from '@mui/material'
import React from 'react'

type Props = {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MyCheckBox({onChange,checked}: Props) {
  return (
    <div>
         <Checkbox
              color="default"
              checked={checked}
              onChange={onChange}
              sx={{
                "&.Mui-checked": {
                  color: "#5F08B1", // Custom color when checked
                },
              }}
            />
    </div>
  )
}