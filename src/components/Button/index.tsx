import React from 'react'
import { ChevronRight } from '@material-ui/icons'
// @ts-ignore
import { ReactComponent as Loading } from './loading.svg'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'naked'
  label?: string
  disabled?: boolean
  active?: boolean
  loading?: boolean
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  custom?: React.ReactNode
  buttonClass?: string
  labelClass?: string
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  labelProps?: React.HTMLProps<HTMLSpanElement>
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  disabled = false,
  active = false,
  loading = false,
  size = 'md',
  icon,
  custom,
  buttonClass,
  labelClass,
  buttonProps,
  labelProps
}) => {
  const iconSize = getLoadingSize(size)
  const labelClassList = [
    'flex-1',
    'leading-none',
    getTextSizeClass(size),
    labelClass ?? ''
  ]

  return (
    <button
      type="button"
      className={getButtonClass(variant, size, active, disabled, buttonClass)}
      disabled={disabled || loading}
      {...(buttonProps ?? {})}
    >
      {loading && (
        <span className="leading-none mr-3">
          <Loading height={iconSize} width={iconSize} className="animate-spin" />
        </span>
      )}
      {icon && !loading && <span className="leading-none mr-3">{icon}</span>}
      {label && (
        <span className={labelClassList.join(' ')} {...(labelProps ?? {})}>
          {label}
        </span>
      )}
      {custom}
      <span className="leading-none ml-3">
        <ChevronRight style={{ fontSize: 'inherit' }} />
      </span>
    </button>
  )
}

const getTextSizeClass = (size: ButtonProps['size']): string => {
  if (size === 'sm') {
    return 'text-xs'
  }
  if (size === 'lg') {
    return 'text-xl'
  }
  return 'text-md'
}

const getLoadingSize = (size: ButtonProps['size']): string => {
  if (size === 'sm') {
    return '12px'
  }
  if (size === 'lg') {
    return '20px'
  }
  return '16px'
}

const getButtonClass = (
  variant: ButtonProps['variant'],
  size: ButtonProps['size'],
  active: boolean,
  disabled: boolean,
  extra?: string
): string => {
  const classes = [
    'flex',
    'flex-row',
    'items-center',
    'rounded-full',
    'transition-opacity',
    'hover:opacity-60'
  ]

  switch (variant) {
    case 'primary': {
      if (disabled) {
        classes.push('bg-ui-element-500', 'text-element-300')
      } else if (active) {
        classes.push('bg-brand-secondary', 'text-element-600')
      } else {
        classes.push('bg-brand-primary', 'text-element-600')
      }
      break
    }
    case 'secondary': {
      if (disabled) {
        classes.push('bg-ui-element-500', 'text-element-300')
      } else if (active) {
        classes.push(
          'bg-transparent',
          'text-element-100',
          'border',
          'border-ui-element-100'
        )
      } else {
        classes.push(
          'bg-transparent',
          'text-element-200',
          'border',
          'border-ui-element-200'
        )
      }
      break
    }
    case 'tertiary': {
      if (disabled) {
        classes.push('bg-ui-element-500', 'text-element-300')
      } else if (active) {
        classes.push('bg-bg-primary', 'text-element-100')
      } else {
        classes.push('bg-bg-primary', 'text-element-200')
      }
      break
    }
    case 'naked': {
      if (disabled) {
        classes.push('bg-transparent', 'text-element-300')
      } else if (active) {
        classes.push('bg-transparent', 'text-element-100')
      } else {
        classes.push('bg-transparent', 'text-element-200')
      }
      break
    }
    default: {
      if (disabled) {
        classes.push('bg-ui-element-500', 'text-element-300')
      } else {
        classes.push('bg-ui-element-100', 'text-element-600')
      }
    }
  }

  if (size === 'sm') {
    classes.push('px-5', 'py-3')
  } else if (size === 'lg') {
    classes.push('px-7', 'py-5')
  } else {
    classes.push('px-6', 'py-4')
  }

  return [...classes, extra ?? ''].join(' ')
}
