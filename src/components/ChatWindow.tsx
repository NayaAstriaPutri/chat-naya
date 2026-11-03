'use client';

import { useRef, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatWindow({ messages }: { messages: Message[] }) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      ref={scrollContainerRef}
      className="flex-1 overflow-y-auto space-y-4 px-1 pr-3 mb-4 scrollbar-thin scrollbar-thumb-sky-200 dark:scrollbar-thumb-slate-700"
    >
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="bg-gradient-to-br from-sky-100 to-amber-100 dark:from-slate-700 dark:to-indigo-900 w-20 h-20 rounded-[1.75rem] flex items-center justify-center mx-auto mb-4 shadow-sm ring-4 ring-white/70 dark:ring-white/5">
              <i className="fas fa-wand-magic-sparkles text-3xl text-sky-600 dark:text-amber-200"></i>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-[#263b5a] dark:text-white">Halo, teman baru! <span aria-hidden="true">✨</span></h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              Halloo! Saya Naya Ai Asisten.
              <br />
              Yuk, tanya apa saja dan kita belajar bersama!
            </p>
          </div>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 animate-fadeIn ${message.role === 'user' ? 'flex-row-reverse' : ''
              }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 ${message.role === 'user'
                ? 'bg-indigo-400 dark:bg-indigo-500'
                : 'bg-gradient-to-br from-sky-400 to-blue-500 dark:from-sky-500 dark:to-indigo-500'
                }`}
            >
              <i
                className={`fas text-xs ${message.role === 'user' ? 'fa-user' : 'fa-robot'
                  }`}
              ></i>
            </div>
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl ${message.role === 'user'
                ? 'bg-sky-500 dark:bg-sky-600 text-white rounded-tr-none shadow-sm shadow-sky-200/60 dark:shadow-none'
                : 'bg-white/90 dark:bg-[#1b2941] text-[#263b5a] dark:text-gray-100 rounded-tl-none border border-amber-100 dark:border-slate-700 shadow-sm shadow-sky-100/70 dark:shadow-none'
                }`}
            >
              <div className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                {message.role === 'assistant' ? (
                  <ReactMarkdown
                    components={{
                      h1: ({ node, ...props }) => (
                        <h1 className="text-xl font-bold mt-2 mb-1" {...props} />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2 className="text-lg font-bold mt-2 mb-1" {...props} />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3 className="text-base font-bold mt-1 mb-1" {...props} />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul className="list-disc list-inside my-0 space-y-0" {...props} />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol className="list-decimal list-inside my-0 space-y-0" {...props} />
                      ),
                      li: ({ node, ...props }) => <li className="ml-1 leading-snug [&>p]:mb-0 [&>p]:inline" {...props} />,
                      strong: ({ node, ...props }) => (
                        <strong className="font-bold text-gray-900 dark:text-gray-100" {...props} />
                      ),
                      p: ({ node, ...props }) => <p className="mb-2 last:mb-0 leading-snug" {...props} />,
                    }}
                  >
                    {message.content
                      // Collapse 3+ newlines to max 2 (prevent huge gaps)
                      .replace(/\n{3,}/g, '\n\n')
                      // Force single newline before any list marker (Markdown, Digit, or Bullet Char) to ensure tight lists
                      .replace(/\n+(?=[-•*] |\d+\.)/g, '\n')}
                  </ReactMarkdown>
                ) : (
                  message.content
                )}
              </div>
              <p
                className={`text-xs mt-2 ${message.role === 'user'
                  ? 'text-blue-100'
                  : 'text-gray-500 dark:text-gray-400'
                  }`}
              >
                {new Date(message.timestamp).toLocaleTimeString('id-ID', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
