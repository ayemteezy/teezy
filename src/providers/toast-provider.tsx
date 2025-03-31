"use client";

import { Toaster } from "sonner";
import { useEffect, useState } from "react";

export const ToastProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return <Toaster position="bottom-right" />;
};
