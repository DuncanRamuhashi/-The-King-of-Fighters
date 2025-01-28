import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema(

      {
              name: {
                type: String,
                required:true,
              },
              description: 
              {
                type: String,
                required: true,
              },
              face: {
                type: String,
                required: true,
               },
               punch: {
                type: String,
                required: true,
                },
                kick: {
                type: String,
                required: true,
                },
                stand:{
                    type: String,
                    required: true,
                    },
      },
      {
            timestamps:true, // createdAt, updateAt
      }
);

const Person = mongoose.model("Person", PersonSchema);

export default Person;