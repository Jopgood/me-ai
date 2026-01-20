import { NextRequest, NextResponse } from "next/server";
import { Ollama } from "ollama";

const ollama = new Ollama({ host: "http://localhost:11434" });

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const response = await ollama.chat({
    model: "gemma3:1b",
    messages: [{ role: "user", content: message }],
  });

  return NextResponse.json({ response: response.message.content });
}
