import React, { ChangeEvent, useState } from 'react'

import cls from './index.module.scss'

interface CheckboxProps {
  label: string
  value: string
  isSelected: boolean
  onClickHandler: (value: string) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, value, isSelected, onClickHandler }) => {
  const [isChecked, setIsChecked] = useState(isSelected)

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    onClickHandler(value)
  }

  return (
    <label className={cls.checkboxWrapper}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={cls.checkbox}
      />
      {label}
    </label>
  )
}
