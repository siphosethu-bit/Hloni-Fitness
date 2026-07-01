import type {PaymentIntent} from './types';
export const paymentService={createIntent:(packageId:string,amount:string):PaymentIntent=>({packageId,amount,status:'requires_configuration'})};
