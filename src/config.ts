import type { AdminUser,CoachSettings } from './types';
export const ADMIN:AdminUser={email:'coach@hlonifitness.co.za',password:'Coach2026!'};
export const DEFAULT_SETTINGS:CoachSettings={businessName:'HLONI FITNESS',coachName:'Hloni M.',whatsapp:'27712345678',email:'coach@hlonifitness.co.za',instagram:'https://instagram.com',paymentProvider:'Not connected'};
export const CLIENT_DEMO={email:'client@demo.co.za',password:'Train2026!'};
export const waLink=(number:string,message:string)=>`https://wa.me/${number.replace(/\D/g,'')}?text=${encodeURIComponent(message)}`;
