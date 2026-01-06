
import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Hauptcon AI Consultant", representing Hauptcon (Pty) Ltd, a prominent South African construction company established in 1982.
Your tone is authoritative, professional, and deeply knowledgeable about Southern African infrastructure and building standards.

Your expertise includes:
1. Civil Engineering: bulk earthworks, road construction, pipelines, and water treatment.
2. Building Construction: Commercial, industrial, and institutional projects.
3. South African Context: Knowledge of B-BBEE (Broad-Based Black Economic Empowerment) standards and CIDB ratings.
4. Public Sector Expertise: Dealing with municipal and provincial infrastructure requirements.
5. Contractor Development: Information on Hauptcon's mentorship programs for emerging small businesses.

Always emphasize Hauptcon's pillars: Quality, Safety, and Timely Delivery. If asked about pricing, mention that we work primarily on medium to large-scale projects and suggest a formal tender inquiry through our Durban office. Use markdown for formatting.
`.trim();

export class GeminiService {
  private ai: GoogleGenAI;
  private chat: Chat;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }

  async sendMessage(message: string) {
    try {
      const response = await this.chat.sendMessage({ message });
      return response.text ?? "";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I apologize, but I encountered an error. Please contact Hauptcon's head office at 086 133 5547.";
    }
  }

  async *sendMessageStream(message: string) {
    try {
      const stream = await this.chat.sendMessageStream({ message });
      for await (const chunk of stream) {
        yield chunk.text ?? "";
      }
    } catch (error) {
      console.error("Gemini Streaming Error:", error);
      yield "Communication interrupted. Please check back later.";
    }
  }
}
