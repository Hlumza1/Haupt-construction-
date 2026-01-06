// Add missing React import to resolve React namespace issues in TypeScript
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  completionYear: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: string;
}