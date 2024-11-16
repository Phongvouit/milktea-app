"use client"
import { FullMessageType } from "@/types"
import { useState } from "react"
import MessageBox from "./MessageBox"

interface BodyProps {
    initialMessages: FullMessageType[] 
}

const Body: React.FC<BodyProps> = ({initialMessages}) => {
    const [messages, setMessages] = useState(initialMessages)

  return (
    <div className="h-full overflow-y-auto p-4 pb-36">
        {messages.map((message) =>(
            <MessageBox
            key={message.id}
            data={message}
            />
        ))}
    </div>
  )
}

export default Body
