export const getLogoUrl = (domain: string, size = 256) =>
	`https://img.logo.dev/${domain}?token=${import.meta.env.VITE_LOGO_DEV_TOKEN}&size=${size}&format=png&retina=true`;
