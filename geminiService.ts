// src/services/geminiService.ts
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY || "";
export const ai = new GoogleGenAI({ apiKey: API_KEY });

// Agent de Génération d'Application
export async function generateAppIdea(prompt: string) {
  const model = "gemini-3.1-pro-preview";
  const systemInstruction = `You are Cephboy AI Builder... Output format MUST be JSON...`;
  // ... appel API ...
}

// Agent Fixeur (pour corriger les erreurs)
export async function getFixerAgentResponse(error: string, context: string) {
  const systemInstruction = `You are the Cephboy FIXER Agent... Analyze console errors...`;
  // ... appel API ...
}