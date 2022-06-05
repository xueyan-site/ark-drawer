import React, { useState } from 'react'
import { Article, Segment } from 'xueyan-react-markdown'
import { Playground } from 'xueyan-react-playground'
import { Drawer } from 'xueyan-react-drawer'

const MARK1 = `
抽屉组件库

## 示例
`

const CODE1 = `
import React, { useState } from 'react'
import { Drawer } from 'xueyan-react-drawer'

export default function Main() {
  const [value, setValue] = useState<boolean>()
  const [value1, setValue1] = useState<boolean>()
  const [value2, setValue2] = useState<boolean>()
  const [value3, setValue3] = useState<boolean>()
  return (
    <div>
      <Drawer value={value} onChange={setValue} size="40%"/>
      <Drawer value={value1} onChange={setValue1} size="40%" direction='top'/>
      <Drawer value={value2} onChange={setValue2} size="40%" direction='left'/>
      <Drawer value={value3} onChange={setValue3} size="40%" direction='right'/>
      <div onClick={() => setValue(true)}>点击显示抽屉（下方，默认）</div>
      <div onClick={() => setValue1(true)}>点击显示抽屉（上方）</div>
      <div onClick={() => setValue2(true)}>点击显示抽屉（左方）</div>
      <div onClick={() => setValue3(true)}>点击显示抽屉（右方）</div>
    </div>
  )
}
`

export default function Main() {
  const scope = { React, useState, Drawer }
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <Playground scope={scope}>
        {CODE1}
      </Playground>
    </Article>
  )
}
