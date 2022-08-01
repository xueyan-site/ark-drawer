import React, { forwardRef, useRef, useImperativeHandle, Fragment } from 'react'
import cn from 'classnames'
import styles from './drawer.scss'
import { SlideTransition, FadeTransition } from 'ark-transition'
import type { SlideTransitionProps, FadeTransitionProps } from 'ark-transition'

export type DrawerOnChange = (
  value: boolean
) => void

export interface DrawerProps {
  /** 内容transition组件参数 */
  transition?: SlideTransitionProps
  /** 蒙层transition组件参数 */
  maskTransition?: FadeTransitionProps
  /** 类名 */
  className?: string
  /** 样式 */
  style?: React.CSSProperties
  /** 蒙层类名 */
  maskClassName?: string
  /** 蒙层样式 */
  maskStyle?: React.CSSProperties
  /** 内容 */
  children?: React.ReactNode
  /** 状态（若为true，则是呈现态，否则是隐藏态） */
  value?: boolean
  /** 内容宽度或高度 */
  size?: React.CSSProperties['width']
  /** 方向 */
  direction?: SlideTransitionProps['direction']
  /** 改变已选值 */
  onChange?: DrawerOnChange
}

export interface DrawerRef {
  /** 根节点 */
  rootNode: HTMLDivElement | null
}

const DIR_STYLES: Record<string, string> = {
  top: styles.top,
  right: styles.right,
  bottom: styles.bottom,
  left: styles.left
}

export const Drawer = forwardRef<DrawerRef, DrawerProps>(({
  transition,
  maskTransition,
  className,
  maskClassName,
  maskStyle,
  children,
  value,
  size,
  direction,
  onChange,
  ...props
}, ref) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const dir = direction || 'bottom'

  useImperativeHandle(ref, () => ({
    rootNode: rootRef.current
  }), [rootRef.current])

  const style = props.style || {}
  if ('lr'.includes(dir[0])) {
    style.width = size
  } else {
    style.height = size
  }

  return (
    <Fragment>
      <FadeTransition 
        {...maskTransition}
        value={value}
      >
        <div 
          className={cn(maskClassName, styles.xrdrawermask)} 
          style={maskStyle}
          onClick={() => {
            if (onChange) {
              onChange(false)
            }
          }}
        />
      </FadeTransition>
      <SlideTransition 
        {...transition}
        value={value}
        direction={dir}
      >
        <div 
          ref={rootRef}
          style={style}
          className={cn(className, styles.xrdrawerconent, DIR_STYLES[dir])}
        >
          {children}
        </div>
      </SlideTransition>
    </Fragment>
  )
})
