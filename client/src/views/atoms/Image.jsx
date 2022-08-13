import React from "react"

export default function Image(props) {
	return <img src={props.source} alt={props.alt} className={props.class} />
}
