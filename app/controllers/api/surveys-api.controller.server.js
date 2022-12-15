import surveysModel from "../../models/surveys.js";
import completeSurveyModel from "../../models/completeSurvey.js";

export function GetList(req, res, next) {
  surveysModel.find((err, surveysCollection) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.json({
      success: true,
      msg: "Success",
      surveys: surveysCollection,
      user: req.user,
    });
  });
}

export function Get(req, res, next) {
  let id = req.params.id;

  surveysModel.findById(id, (err, survey) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    return res.json({
      success: true,
      msg: "Success",
      survey,
      user: req.user,
    });
  });
}

export function Add(req, res, next) {
  let newSurvey = new surveysModel({
    ...req.body,
  });

  surveysModel.create(newSurvey, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.json({
      success: true,
      msg: "Success",
      survey: newSurvey,
    });
  });
}

export function Edit(req, res, next) {
  let id = req.params.id;

  console.log(req.body);
  let updatedSurvey = new surveysModel({
    _id: id,
    ...req.body,
  });



  surveysModel.updateOne({ _id: id }, updatedSurvey, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.json({
      success: true,
      msg: "Success",
      survey: updatedSurvey,
    });
  });
}

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
export function Delete(req, res, next) {
  let id = req.params.id;

  
  surveysModel.remove({ _id: id }, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }
    res.json({
      success: true,
      msg: "Deleted Successfully",
    });
  });
}
