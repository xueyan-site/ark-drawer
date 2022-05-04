import React, { useState } from 'react'
import { Drawer } from 'xueyan-react-drawer'

export default function Main() {
  const [value, setValue] = useState<boolean>()
  return (
    <div>
      <Drawer value={value} onChange={setValue}>
        ddd
      </Drawer>
      <button onClick={() => setValue(true)}>change</button>
    </div>
  )
}
