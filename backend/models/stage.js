import mongoose from "mongoose";

const stageSchema = new mongoose.Schema(

      {
              name: {
                type: String,
                required:true,
              },
                image: {
                type: String,
                required: true,
                },
      },
      {
            timestamps:true, // createdAt, updateAt
      }
);

const stage = mongoose.model("Stage", stageSchema);

export default stage;