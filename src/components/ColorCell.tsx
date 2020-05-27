import React from 'react'

export const ColorCell = (props: any) => {
  const color = props.color;
  return (
    <div className='card' style={{backgroundColor: color, minHeight: '35px'}} />
  )
}
