import React from 'react'
import { Article, Segment } from 'ark-markdown'

const MARK1 = `
抽屉组件

\`\`\`
type Button = React.ForwardRefExoticComponent<
  DrawerProps & React.RefAttributes<DrawerRef>
>
\`\`\`

## DrawerRef

\`\`\`
interface DrawerRef {
  /** 根节点 */
  rootNode: HTMLDivElement | null
}
\`\`\`

## DrawerProps

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| transition | 内容transition组件参数 | \`? SlideTransitionProps\` |  |
| maskTransition | 蒙层transition组件参数 | \`? FadeTransitionProps\` |  |
| className | 类名 | \`? string\` |  |
| style | 样式 | \`? React.CSSProperties\` |  |
| maskClassName | 蒙层类名 | \`? string\` |  |
| maskStyle | 蒙层样式 | \`? React.CSSProperties\` |  |
| children | 内容 | \`? React.ReactNode\` |  |
| value | 状态 | \`? boolean\` | true 为呈现态 |
| size | 内容宽/高度 | \`? React.CSSProperties['width']\` |  |
| direction | 方向 | \`? SlideTransitionProps['direction']\` |  |
| onChange | 改变已选值 | \`? DrawerOnChange\` |  |

> 其他类型：[SlideTransitionProps](/ark-transition?doc=0004#slidetransitionprops)、[FadeTransitionProps](/ark-transition?doc=0003#fadetransitionprops)

## DrawerOnChange

点击事件触发的回调

\`\`\`
type DrawerOnChange = (
  value: boolean
) => void
\`\`\`
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
