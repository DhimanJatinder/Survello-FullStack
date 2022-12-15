import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CompletedSurveySchema = new Schema(
  {
    _id: String,
    surveyId: String,
    title: String,
    description: String,
    content: [],
    feedback: String,
   // owner: String
  },
  {
    timestamps: true,
    collection: "completeSurveys",
  }
);

export default mongoose.model("CompletedSurvey", CompletedSurveySchema);
