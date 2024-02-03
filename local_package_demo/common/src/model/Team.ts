import { prop, getModelForClass } from '@typegoose/typegoose';

class Team {
    @prop()
    public name?: string;

    @prop({ type: () => [String] })
    public description?: string;

    @prop({ type: () => [String] })
    public members?: string[];
}

export const TeamModel = getModelForClass(Team); // UserModel is a regular Mongoose Model with correct types
