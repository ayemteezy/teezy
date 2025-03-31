"use client";

import { useEffect, useState } from "react";
import { Toaster } from "sonner";

export const ToastProvider = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null; // Prevents hydration mismatch

	return <Toaster position="bottom-right" />;
};
