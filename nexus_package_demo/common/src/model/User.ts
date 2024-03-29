import { prop, getModelForClass } from '@typegoose/typegoose';

class User {
    @prop()
    public name?: string;

    @prop({ type: () => [String] })
    public jobs?: string[];
}

export const UserModel = getModelForClass(User); // UserModel is a regular Mongoose Model with correct types
