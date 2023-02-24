import UserInfo from "./userInfo/UserInfo"

interface headerProps {
  title: string
}
export default function Header({title}: headerProps) {
  return (
    <header className="main_header">
      <h1>{title}</h1>
      <UserInfo />
    </header>
  )
}
