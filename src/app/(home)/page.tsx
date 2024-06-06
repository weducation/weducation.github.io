"use client";

import { useEffect, useRef, useState } from "react";
import siteData from "../siteData";
import Counter from "../components/Counter";

export default function Home() {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const [redirectCancelled, setRedirectCancelled] = useState(false);

  useEffect(() => {
    if (siteData.redirect) {
      timeoutId.current = setTimeout(() => {
        window.location.replace(siteData.redirectUrl);
      }, siteData.redirectTime);
    }

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
      setRedirectCancelled(true);
      alert("Redirecionamento cancelado!");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center gap-6 h-screen cursor-wait bg-stone-900 select-none"
      onContextMenu={handleContextMenu}
    >
      <h1
        className="text-5xl text-blue-500 transition-all hover:scale-105 hover:text-blue-700"
        onClick={() => (window.location.href = "/login")}
      >
        {siteData.title}
      </h1>

      <div className="transition-colors text-stone-200 hover:text-blue-600 hover:animate-spin active:text-yellow-300">
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="12" r="3" fill="currentColor" opacity="0.25">
            <animate
              attributeName="opacity"
              begin="0s"
              dur="0.8s"
              values="0.2;1;0.2"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.5">
            <animate
              attributeName="opacity"
              begin="0.3s"
              dur="0.8s"
              values="0.2;1;0.2"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="20" cy="12" r="3" fill="currentColor" opacity="0.75">
            <animate
              attributeName="opacity"
              begin="0.6s"
              dur="0.8s"
              values="0.2;1;0.2"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {!redirectCancelled && (
        <h2 className="text-4xl text-yellow-300 transition-all hover:scale-105 hover:text-yellow-500">
          Redirecionando...
        </h2>
      )}

      <Counter className="mt-6" />
    </div>
  );
}
