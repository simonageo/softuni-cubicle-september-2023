const uniqid = require('uniqid');
const cubes = [];

exports.getAll = () => cubes.slice();//returns a shallow copy of the array cubes

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData
    };//adds an id to the cube
    cubes.push(newCube);
    return newCube;
}