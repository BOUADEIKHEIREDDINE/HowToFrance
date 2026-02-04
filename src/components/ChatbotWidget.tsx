'use client';

import { useState } from 'react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-30">
      {isOpen && (
        <div className="mb-3 w-80 max-w-[90vw] rounded-xl border bg-white shadow-lg p-4 text-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-primary">HTF Assistant (demo)</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
          <p className="text-gray-700 mb-2">
            This is a placeholder chatbot. In the future, it will help you navigate
            visas, housing, and more.
          </p>
          <p className="text-xs text-gray-500">
            For now, use the guides and forum for answers.
          </p>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-full bg-primary text-white px-4 py-3 shadow-lg hover:bg-primary/90 text-sm"
      >
        {isOpen ? 'Hide help' : 'Need help?'}
      </button>
    </div>
  );
}
