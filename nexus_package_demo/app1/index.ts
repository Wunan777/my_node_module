import mongoose from 'mongoose';
import { TeamModel } from '@company-a/common';

(async () => {
    await mongoose.connect('mongodb://localhost:27017/', { dbName: 'test' });

    const { _id: id } = await TeamModel.create({
        name: 'JohnDoe',
        jobs: ['Cleaner'],
    });
    const user = await TeamModel.findById(id).exec();

    console.log(user); // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
})();
