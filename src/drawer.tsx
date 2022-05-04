import React, { forwardRef, useRef, useImperativeHandle, Fragment } from 'react'
import cn from 'classnames'
import styles from './drawer.scss'
import { SlideTransition, FadeTransition } from 'xueyan-react-transition'
import type { SlideTransitionProps, FadeTransitionProps } from 'xueyan-react-transition'

export interface DrawerProps {
  /** 内容transition组件参数 */
  contentTransition?: SlideTransitionProps
  /** 蒙层transition组件参数 */
  maskTransition?: FadeTransitionProps
  /** 类名 */
  className?: string
  /** 蒙层类名 */
  maskClassName?: string
  /** 样式 */
  style?: React.CSSProperties
   /** 蒙层样式 */
  maskStyle?: React.CSSProperties
  /** 内容 */
  children?: React.ReactNode
  /** 状态（若为true，则是呈现态，否则是隐藏态） */
  value?: boolean
  /** 方向 */
  direction?: SlideTransitionProps['direction']
  /** 隐藏mask */
  hideMask?: boolean
  /** 改变已选值 */
  onChange?: (value?: boolean) => void
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
  contentTransition,
  maskTransition,
  className,
  maskClassName,
  style,
  maskStyle,
  children,
  value,
  direction,
  hideMask,
  onChange
}, ref) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const dir = direction || 'bottom'

  useImperativeHandle(ref, () => ({
    rootNode: rootRef.current
  }), [rootRef.current])

  return (
    <Fragment>
      <FadeTransition 
        {...maskTransition}
        value={value && !hideMask}
      >
        <div 
          className={cn(styles.xrdrawermask, maskClassName)} 
          style={maskStyle}
          onClick={() => {
            if (onChange) {
              onChange(false)
            }
          }}
        />
      </FadeTransition>
      <SlideTransition 
        {...contentTransition}
        value={value}
        direction={dir}
      >
        <div 
          ref={rootRef}
          className={cn(styles.xrdrawerconent, DIR_STYLES[dir], className)}
          style={style}
        >
          {children}
        </div>
      </SlideTransition>
    </Fragment>
  )
})
