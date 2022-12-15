import surveysModel from "../../models/surveys.js";
import completeSurveyModel from "../../models/completeSurvey.js";


//For submission to survey
export function CompleteSurvey(req,res,next){
  
  //console.log(req.body.params);
  let newCompleteSurvey = new completeSurveyModel({
    ...req.body
  })

  completeSurveyModel.create(newCompleteSurvey, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.json({
      success: true,
      msg: "Success",
      completeSurvey: newCompleteSurvey,
    });
  });

}
