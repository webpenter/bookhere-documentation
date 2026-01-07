
import React from 'react';
import { Copy, Check, Quote, Square, CheckSquare } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  onNavigate?: (tab: string) => void;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, onNavigate }) => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const parseBlocks = (text: string) => {
    const lines = text.split('\n');
    const blocks: any[] = [];
    let currentCodeBlock: string[] | null = null;
    let currentTable: string[][] | null = null;
    let currentCodeLanguage = '';
    let currentList: { type: 'ul' | 'ol'; items: { content: string; value?: string }[] } | null = null;

    const flushList = () => {
      if (currentList) {
        blocks.push(currentList);
        currentList = null;
      }
    };

    lines.forEach((line) => {
      const trimmed = line.trim();

      // Handle Code Blocks
      if (trimmed.startsWith('```')) {
        flushList();
        if (currentCodeBlock) {
          blocks.push({ type: 'code', content: currentCodeBlock.join('\n'), language: currentCodeLanguage });
          currentCodeBlock = null;
          currentCodeLanguage = '';
        } else {
          currentCodeBlock = [];
          currentCodeLanguage = trimmed.replace('```', '').trim();
        }
        return;
      }

      if (currentCodeBlock !== null) {
        currentCodeBlock.push(line);
        return;
      }

      // Handle Tables
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        flushList();
        const row = line.split('|').filter((cell, idx, arr) => {
          if (idx === 0 || idx === arr.length - 1) return false;
          return true;
        }).map(cell => cell.trim());

        if (row.every(cell => cell.match(/^[ :-]+$/))) {
          return;
        }

        if (currentTable) {
          currentTable.push(row);
        } else {
          currentTable = [row];
        }
        return;
      } else if (currentTable) {
        blocks.push({ type: 'table', content: currentTable });
        currentTable = null;
      }

      // Handle Lists
      if (trimmed.startsWith('- [ ] ') || trimmed.startsWith('- [] ') || trimmed.startsWith('- [x] ')) {
        flushList();
        const completed = trimmed.startsWith('- [x] ');
        blocks.push({ type: 'task', content: trimmed.replace(/- \[[ x]?\] /i, ''), completed });
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('+ ')) {
        const content = trimmed.replace(/^[-*+]\s+/, '');
        if (currentList && currentList.type === 'ul') {
          currentList.items.push({ content });
        } else {
          flushList();
          currentList = { type: 'ul', items: [{ content }] };
        }
      } else if (trimmed.match(/^\d+\.\s+/)) {
        const match = trimmed.match(/^(\d+)\.\s+/);
        const value = match ? match[1] : undefined;
        const content = trimmed.replace(/^\d+\.\s+/, '');
        if (currentList && currentList.type === 'ol') {
          currentList.items.push({ content, value });
        } else {
          flushList();
          currentList = { type: 'ol', items: [{ content, value }] };
        }
      } else {
        flushList();
        // Handle Other Elements
        if (trimmed.startsWith('# ')) {
          blocks.push({ type: 'h1', content: trimmed.replace('# ', '') });
        } else if (trimmed.startsWith('## ')) {
          blocks.push({ type: 'h2', content: trimmed.replace('## ', '') });
        } else if (trimmed.startsWith('### ')) {
          blocks.push({ type: 'h3', content: trimmed.replace('### ', '') });
        } else if (trimmed.startsWith('#### ')) {
          blocks.push({ type: 'h4', content: trimmed.replace('#### ', '') });
        } else if (trimmed.startsWith('##### ')) {
          blocks.push({ type: 'h5', content: trimmed.replace('##### ', '') });
        } else if (trimmed.startsWith('###### ')) {
          blocks.push({ type: 'h6', content: trimmed.replace('###### ', '') });
        } else if (trimmed === '---' || trimmed === '***' || trimmed === '___') {
          blocks.push({ type: 'hr' });
        } else if (trimmed.startsWith('> ')) {
          blocks.push({ type: 'blockquote', content: trimmed.replace('> ', '') });
        } else if (trimmed !== '') {
          blocks.push({ type: 'p', content: trimmed });
        } else {
          blocks.push({ type: 'space' });
        }
      }
    });

    flushList();
    if (currentTable) {
      blocks.push({ type: 'table', content: currentTable });
    }

    return blocks;
  };

  const blocks = parseBlocks(content);

  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (anchor && onNavigate) {
      const href = anchor.getAttribute('href');
      if (href) {
        // Handle internal .md links
        if (href.endsWith('.md') || href.includes('./')) {
          e.preventDefault();
          const tabName = href.split('/').pop()?.replace('.md', '').toLowerCase();
          if (tabName) onNavigate(tabName);
        }
        // Handle hash links
        else if (href.startsWith('#')) {
          e.preventDefault();
          const id = href.slice(1);
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const processInlineMarkdown = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-bold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/__(.*?)__/g, '<strong class="text-slate-900 font-bold">$1</strong>')
      .replace(/_(.*?)_/g, '<em class="italic">$1</em>')
      .replace(/~~(.*?)~~/g, '<del class="line-through text-slate-400">$1</del>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-rose-500 hover:underline font-medium">$1</a>')
      .replace(/`(.*?)`/g, '<code class="bg-slate-100 text-rose-600 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
      // Handle navigation paths like "Menu" → "Submenu"
      .replace(/"([^"]+)"/g, '<span class="inline-flex items-center px-1.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-[13px] font-semibold mx-0.5 shadow-sm">$1</span>')
      .replace(/→/g, '<span class="text-slate-400 mx-1 font-light">→</span>');
  };

  return (
    <div className="space-y-4" onClick={handleLinkClick}>
      {blocks.map((block, i) => {
        if (block.type === 'space') return <div key={i} className="h-2" />;

        if (block.type === 'h1') {
          return <h1 key={i} className="text-4xl font-extrabold text-slate-900 mt-12 mb-6 border-b border-slate-200 pb-4 tracking-tight">{block.content}</h1>;
        }

        if (block.type === 'h2') {
          return <h2 key={i} className="text-3xl font-bold text-slate-900 mt-10 mb-5 tracking-tight">{block.content}</h2>;
        }

        if (block.type === 'h3') {
          return <h3 key={i} className="text-2xl font-bold text-slate-800 mt-8 mb-4 tracking-tight">{block.content}</h3>;
        }

        if (block.type === 'h4') {
          return <h4 key={i} className="text-xl font-bold text-slate-800 mt-6 mb-3 tracking-tight">{block.content}</h4>;
        }

        if (block.type === 'h5') {
          return <h5 key={i} className="text-lg font-bold text-slate-800 mt-4 mb-2 tracking-tight">{block.content}</h5>;
        }

        if (block.type === 'h6') {
          return <h6 key={i} className="text-base font-bold text-slate-700 mt-4 mb-2 tracking-tight uppercase tracking-wider">{block.content}</h6>;
        }

        if (block.type === 'hr') {
          return <hr key={i} className="my-12 border-t border-slate-200" />;
        }

        if (block.type === 'blockquote') {
          return (
            <div key={i} className="my-6 pl-6 border-l-4 border-rose-500 bg-rose-50/30 py-4 pr-4 rounded-r-xl flex gap-4">
              <Quote className="text-rose-500 shrink-0" size={20} />
              <p className="text-slate-700 italic leading-relaxed" dangerouslySetInnerHTML={{ __html: processInlineMarkdown(block.content) }} />
            </div>
          );
        }

        if (block.type === 'task') {
          return (
            <div key={i} className="flex items-center gap-3 my-2 ml-2">
              {block.completed ?
                <CheckSquare className="text-rose-500" size={18} /> :
                <Square className="text-slate-300" size={18} />
              }
              <span className={`text-slate-600 ${block.completed ? 'line-through text-slate-400' : ''}`} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(block.content) }} />
            </div>
          );
        }

        if (block.type === 'ul') {
          return (
            <ul key={i} className="ml-6 list-disc space-y-2 my-4">
              {block.items.map((item: any, idx: number) => (
                <li key={idx} className="text-slate-600 leading-relaxed pl-2" dangerouslySetInnerHTML={{ __html: processInlineMarkdown(item.content) }} />
              ))}
            </ul>
          );
        }

        if (block.type === 'ol') {
          return (
            <ol key={i} className="ml-6 list-decimal space-y-2 my-4">
              {block.items.map((item: any, idx: number) => (
                <li key={idx} value={item.value} className="text-slate-600 leading-relaxed pl-2" dangerouslySetInnerHTML={{ __html: processInlineMarkdown(item.content) }} />
              ))}
            </ol>
          );
        }

        if (block.type === 'table') {
          return (
            <div key={i} className="my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      {block.content[0].map((cell: string, idx: number) => (
                        <th key={idx} className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {block.content.slice(1).map((row: string[], rowIdx: number) => (
                      <tr key={rowIdx} className="hover:bg-slate-50/50 transition-colors">
                        {row.map((cell: string, cellIdx: number) => (
                          <td key={cellIdx} className="px-6 py-4 text-sm text-slate-600">
                            <span dangerouslySetInnerHTML={{ __html: processInlineMarkdown(cell) }} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }

        if (block.type === 'code') {
          const codeLines = block.content.split('\n');
          return (
            <div key={i} className="relative group my-8 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                  </div>
                  {block.language && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{block.language}</span>
                  )}
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

              <div className="bg-slate-900 overflow-x-auto">
                <pre className="font-mono text-sm leading-6 py-4 flex min-w-full">
                  <div className="select-none text-right pr-4 pl-4 border-r border-slate-800 text-slate-600 bg-slate-900/50 sticky left-0 min-w-[3rem]">
                    {codeLines.map((_: any, idx: number) => (
                      <div key={idx} className="h-6">{idx + 1}</div>
                    ))}
                  </div>
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
          return (
            <p
              key={i}
              className="text-slate-600 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: processInlineMarkdown(block.content) }}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default MarkdownRenderer;
