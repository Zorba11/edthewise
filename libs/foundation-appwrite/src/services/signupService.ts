import { account } from "../appwrite-config/config";
import { v4 as uuidv4 } from "uuid";
import { ISignUpResponse } from "../models/ISignUpRespose";

export const signUp = async (email: string, password: string, fullName: string) => {
  try {
    const signUpResponse =await account.create(uuidv4(), email, password, fullName);
    return signUpResponse;
  } catch (error: any) {
    throw new Error(error);
  }
}