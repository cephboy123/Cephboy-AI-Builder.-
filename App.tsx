// Extraits clés de src/App.tsx
import React, { useState, useEffect, useRef } from 'react';
import { generateAppIdea, getAgentResponse, getFixerAgentResponse } from './services/geminiService';

export default function App() {
  // Gestion des messages et de l'état de génération
  const [agentMessages, setAgentMessages] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedApp, setGeneratedApp] = useState(null);

  // Fonction de génération déclenchée par l'IA
  const handleGenerate = async (currentMessages) => {
    const fullPrompt = currentMessages.map(m => `${m.role}: ${m.content}`).join('\n');
    const result = await generateAppIdea(fullPrompt);
    setGeneratedApp(result);
    // ... mise à jour de l'aperçu ...
  };

  // ... Logique de rendu de l'interface (Tabs, Chat, Preview) ...
}