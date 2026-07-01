import {DEFAULT_SETTINGS} from './config'; import {seedClients,seedPackages,seedSessions} from './data'; import type {Client,CoachSettings,ConsultationRequest,Package,WorkoutSession} from './types';
const read=<T>(key:string,fallback:T):T=>{try{const value=localStorage.getItem(key);return value?JSON.parse(value):fallback}catch{return fallback}};
const write=<T>(key:string,value:T)=>{localStorage.setItem(key,JSON.stringify(value));window.dispatchEvent(new Event('hf-storage'))};
export const db={
 packages:()=>read<Package[]>('hf_packages',seedPackages),savePackages:(v:Package[])=>write('hf_packages',v),
 clients:()=>read<Client[]>('hf_clients',seedClients),saveClients:(v:Client[])=>write('hf_clients',v),
 consultations:()=>read<ConsultationRequest[]>('hf_consultations',[]),saveConsultations:(v:ConsultationRequest[])=>write('hf_consultations',v),
 sessions:()=>read<WorkoutSession[]>('hf_sessions',seedSessions),saveSessions:(v:WorkoutSession[])=>write('hf_sessions',v),
 settings:()=>read<CoachSettings>('hf_settings',DEFAULT_SETTINGS),saveSettings:(v:CoachSettings)=>write('hf_settings',v),
 auth:(role:'admin'|'client')=>sessionStorage.getItem(`hf_${role}`)==='true',login:(role:'admin'|'client')=>sessionStorage.setItem(`hf_${role}`,'true'),logout:(role:'admin'|'client')=>sessionStorage.removeItem(`hf_${role}`)
};
