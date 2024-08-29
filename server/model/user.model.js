import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
        set(value){
            const saltkey = bcrypt.genSaltSync(10);
            const encrtptedPassword = bcrypt.hashSync(value, saltkey);
            return encrtptedPassword;
        }
    },
});

userSchema.methods.comparePass = function (candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password);
};

export default mongoose.model('User', userSchema);