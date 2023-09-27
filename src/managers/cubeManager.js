const cubes=[];

exports.getAll=()=>cubes.slice();//returns a shallow copy of the array cubes

exports.create=(cubeData)=>{
    const newCube={
        id: cubes.length+1,
        ...cubeData
    }//adds an id to the cube
    cubes.push(newCube);
    return newCube;
}