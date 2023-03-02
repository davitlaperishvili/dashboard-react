import React from 'react'
type CardProps = {
  children: React.ReactNode;
  classList?: string
};
export default function Card(props: CardProps ) {
  return (
    <div className={`card_wrap ${props.classList}`}>
      <div className="card">{props.children}</div>
    </div>
  )
}
