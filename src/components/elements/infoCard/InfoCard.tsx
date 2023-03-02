import React from 'react'
import "./infoCard.scss";
interface infoCardType{
  title: string;
  value:string;
}
export default function InfoCard(props: infoCardType) {
  return (
    <div className="info_card">
      <div className="title">{props.title}</div>
      <div className="value">{props.value}</div>
    </div>
  )
}
