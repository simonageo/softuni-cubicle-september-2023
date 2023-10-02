const mognoose = require('mongoose');

const cubeSchema = new mognoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 100
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                const reg = /^https?:\/\//;
                return reg.test(value);
            },
            message: 'imageurl must start with http:// or https://'
        }
    },
    difficultyLevel:{
        type: Number,
        required: true,
        min: 1,
        max: 6
    }
})