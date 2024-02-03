import mongoose from 'mongoose';
import { UserModel } from 'shared_code';

(async () => {
    await mongoose.connect('mongodb://localhost:27017/', { dbName: 'test' });

    const { _id: id } = await UserModel.create({
        name: 'JohnDoe',
        jobs: ['Cleaner'],
    });
    const user = await UserModel.findById(id).exec();

    console.log(user); // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
})();
