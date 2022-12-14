import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CompletedSurveySchema = new Schema(
  {
    _id: Number,
    completedId: Number,
    title: String,
    description: String,
    content: [],
    feedback: String,
    //owner: any,
  },
  {
    timestamps: true,
    collection: "surveys",
  }
);

export default mongoose.model("CompletedSurvey", CompletedSurveySchema);
