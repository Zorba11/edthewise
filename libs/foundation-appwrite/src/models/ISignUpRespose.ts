export interface ISignUpResponse {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  password: string;
  hash: string;
  hashOptions: {
    memoryCost: number;
    timeCost: number;
    threads: number;
  };
  registration: string;
  status: boolean;
  passwordUpdate: string;
  email: string;
  phone: string;
  emailVerification: boolean;
  phoneVerification: boolean;
  
  prefs: Record<string, unknown>;
}