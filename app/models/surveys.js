import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SurveysSchema = new Schema(
  {
    title: String,
    description: String,
    surveyType: String,
    content: [],
  },
  {
    timestamps: true,
    collection: "surveys",
  }
);

export default mongoose.model("Surveys", SurveysSchema);
