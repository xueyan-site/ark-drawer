import React, { useState } from 'react'
import { Drawer } from 'xueyan-react-drawer'
import { SwitchTheme } from 'xueyan-react-style'

export default function Main() {
  const [value, setValue] = useState<boolean>()
  const [value1, setValue1] = useState<boolean>()
  const [value2, setValue2] = useState<boolean>()
  const [value3, setValue3] = useState<boolean>()
  return (
    <div>
      <SwitchTheme/>
      <Drawer value={value} onChange={setValue} size="40%">
        ddd
      </Drawer>
      <Drawer value={value1} onChange={setValue1} size="40%" direction='top'>
        ddd
      </Drawer>
      <Drawer value={value2} onChange={setValue2} size="40%" direction='left'>
        ddd
      </Drawer>
      <Drawer value={value3} onChange={setValue3} size="40%" direction='right'>
        ddd
      </Drawer>
      <button onClick={() => setValue(true)}>change</button>
      <button onClick={() => setValue1(true)}>change</button>
      <button onClick={() => setValue2(true)}>change</button>
      <button onClick={() => setValue3(true)}>change</button>
    </div>
  )
}
