import { chatbotPrompt } from "@/helpers/constants/chatbotPrompt"
import { ChatgptMessage } from "@/lib/openai-stream"
import { MessageArraySchema } from "@/validators/message"

export async function POST(req:Request) {
    const {messages} = await req.json()
    const parseMessages = MessageArraySchema.parse(messages)

    const outboundMessages: ChatgptMessage[] = parseMessages.map(message => ({
        role: message.isUserMessage ? 'user' : 'system',
        content: message.text
    }))

    outboundMessages.unshift({
        role: 'system',
        content: chatbotPrompt
    })
}