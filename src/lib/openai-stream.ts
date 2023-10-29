export type ChatGPTAgent = "user" | "system"
export interface ChatgptMessage{
    role: ChatGPTAgent
    content: string
}