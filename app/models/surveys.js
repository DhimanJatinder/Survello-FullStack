import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SurveysSchema = new Schema(
  {
    title: String,
    description: String,
    surveyType: String,
    lifeTime: String,
    content: [],
    owner: String,
  },
  {
    timestamps: true,
    collection: "surveys",
  }
);

export default mongoose.model("Surveys", SurveysSchema);
