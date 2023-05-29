import { PropsWithChildren } from "react"

const Icon = (props:PropsWithChildren<{link:string}>) => {
  return (
    <a className="icon-link" href={props.link} target="_blank">{props.children}</a>
  )
}

export default Icon