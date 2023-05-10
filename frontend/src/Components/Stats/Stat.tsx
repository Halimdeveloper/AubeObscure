import * as React from 'react'

interface StatProps {
  title: string
  value: number
  addition: number
}

export default function Stat({ title, value, addition }: StatProps) {
  return (
    <div className='stat-panel'>
      <div className='stat-title'>{title}</div>
      <div className='stat-value'>
        {value}
        <div className='stat-addition'>+{addition}</div>
      </div>
    </div>
  )
}
