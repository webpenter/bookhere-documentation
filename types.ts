
import { LucideIcon } from 'lucide-react';

export interface DocSection {
  title: string;
  icon: LucideIcon;
  content: string;
  tags?: string[];
}

export type DocsContent = Record<string, DocSection>;

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
