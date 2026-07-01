import type { Client,Package,WorkoutSession } from './types';
export const seedPackages:Package[]=[
 {id:'assessment',name:'Starter Assessment',price:'R650',duration:'75 minutes',features:['Movement screening','Goal mapping','Baseline measurements','Clear action plan'],bestFor:'Anyone who wants a precise starting point',active:true},
 {id:'fat-loss',name:'4 Week Fat Loss Plan',price:'R1,850',duration:'4 weeks',features:['Personalised programme','Nutrition guidelines','Weekly accountability','Progress review'],bestFor:'Building momentum and sustainable habits',active:true},
 {id:'strength',name:'8 Week Strength Program',price:'R3,200',duration:'8 weeks',features:['Progressive strength plan','Technique coaching','Weekly check-ins','Performance tracking'],bestFor:'Getting stronger with sound technique',active:true},
 {id:'corporate',name:'Corporate Fitness Coaching',price:'Custom quote',duration:'Flexible',features:['Team assessments','Group sessions','Wellness workshops','Engagement reporting'],bestFor:'Organisations investing in employee wellness',active:true},
 {id:'club',name:'Personal Training Club',price:'R1,450 / month',duration:'Monthly',features:['Small-group coaching','Structured sessions','Member accountability','Progress tracking'],bestFor:'Consistent coached training',active:true},
 {id:'online',name:'Online Coaching',price:'R1,250 / month',duration:'Monthly',features:['Remote programme','Video form feedback','Weekly check-in','Direct coach support'],bestFor:'Training anywhere with expert guidance',active:true}
];
export const seedClients:Client[]=[{id:'c1',name:'Lerato Nkosi',email:'client@demo.co.za',phone:'082 555 0101',goal:'Strength',packageId:'strength',status:'active',joined:'2026-05-12',progress:[{id:'p1',date:'2026-06-25',weight:74.2,note:'Squat felt controlled. Added 5 kg.'}],measurements:[{id:'m1',date:'2026-06-01',chest:94,waist:78,hips:101,arm:31}],notes:['Focus on sleep before Thursday sessions.']}];
export const seedSessions:WorkoutSession[]=[{id:'s1',clientId:'c1',title:'Lower body strength',date:'2026-07-03',time:'07:00',completed:false},{id:'s2',clientId:'c1',title:'Technique review',date:'2026-07-06',time:'17:30',completed:false}];
