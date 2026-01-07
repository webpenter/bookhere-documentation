
import React from 'react';
import { Copy, Check } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Improved parsing logic to handle multi-line code blocks
  const parseBlocks = (text: string) => {
    const lines = text.split('\n');
    const blocks: any[] = [];
    let currentCodeBlock: string[] | null = null;

    lines.forEach((line) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('```')) {
        if (currentCodeBlock) {
          blocks.push({ type: 'code', content: currentCodeBlock.join('\n') });
          currentCodeBlock = null;
        } else {
          currentCodeBlock = [];
        }
        return;
      }

      if (currentCodeBlock !== null) {
        currentCodeBlock.push(line);
        return;
      }

      if (trimmed.startsWith('# ')) {
        blocks.push({ type: 'h1', content: trimmed.replace('# ', '') });
      } else if (trimmed.startsWith('### ')) {
        blocks.push({ type: 'h3', content: trimmed.replace('### ', '') });
      } else if (trimmed.startsWith('- ')) {
        blocks.push({ type: 'li', content: trimmed.replace('- ', '') });
      } else if (trimmed !== '') {
        blocks.push({ type: 'p', content: trimmed });
      } else {
        blocks.push({ type: 'space' });
      }
    });

    return blocks;
  };

  const blocks = parseBlocks(content);

  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        if (block.type === 'space') return <div key={i} className="h-2" />;

        if (block.type === 'h1') {
          return <h1 key={i} className="text-4xl font-extrabold text-slate-900 mt-12 mb-6 border-b border-slate-200 pb-4 tracking-tight">{block.content}</h1>;
        }

        if (block.type === 'h3') {
          return <h3 key={i} className="text-2xl font-bold text-slate-800 mt-8 mb-4 tracking-tight">{block.content}</h3>;
        }

        if (block.type === 'li') {
          return <li key={i} className="ml-6 list-disc text-slate-600 my-2 leading-relaxed pl-2">{block.content}</li>;
        }

        if (block.type === 'code') {
          const codeLines = block.content.split('\n');
          return (
            <div key={i} className="relative group my-8 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
              {/* Toolbar */}
              <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <button 
                  onClick={() => handleCopy(block.content, i)}
                  className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
                >
                  {copiedIndex === i ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Area with Line Numbers */}
              <div className="bg-slate-900 overflow-x-auto">
                <pre className="font-mono text-sm leading-6 py-4 flex min-w-full">
                  {/* Line numbers column */}
                  <div className="select-none text-right pr-4 pl-4 border-r border-slate-800 text-slate-600 bg-slate-900/50 sticky left-0 min-w-[3rem]">
                    {codeLines.map((_: any, idx: number) => (
                      <div key={idx} className="h-6">{idx + 1}</div>
                    ))}
                  </div>
                  {/* Code column */}
                  <div className="pl-4 pr-8 text-slate-300 min-w-full whitespace-pre">
                    {codeLines.map((line: string, idx: number) => (
                      <div key={idx} className="h-6 flex items-center">
                        <span className="inline-block">{line || ' '}</span>
                      </div>
                    ))}
                  </div>
                </pre>
              </div>
            </div>
          );
        }

        if (block.type === 'p') {
          // Handle bold within text
          const processedLine = block.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-bold">$1</strong>');
          return (
            <p 
              key={i} 
              className="text-slate-600 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: processedLine }}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default MarkdownRenderer;
