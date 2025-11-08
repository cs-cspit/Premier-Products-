// API URL configuration with runtime safety log
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3004/api';
if (typeof window !== 'undefined') {
	// Helpful debug in deployed builds
	console.log('[API] Base URL:', API_BASE_URL);
}
export default API_BASE_URL;
