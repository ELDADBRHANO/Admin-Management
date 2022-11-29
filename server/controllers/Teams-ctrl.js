const teams = require("../models/Teams");

const getTeams = async () => {
  await teams
    .find({})
    .then((data, err) => {
      if (err) {
        return res.status(200).json({ success: false, error: err });
      }
      if (data.length == 0) {
        return res
          .status(400)
          .json({
            success: false,
            message: "There is no teams to view at this Time.",
          });
      }
      res.status(200).json({ success: true, data: data });
    })
    .catch((err) => {
      if (err) res.status(400).json({ success: false, error: err });
    });
};

const createTeams = async (req, res) => {
  await teams
    .insertMany(req.body.teams)
    .then((equipment) => {
      if (equipment.length == 0) {
        return res
          .status(400)
          .json({ success: false, message: "Cant send empty fields!" });
      }
      return res
        .status(300)
        .json({ success: true, message: "teams added successfully." });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: err });
    });
};

const deleteTeams=async (req,res)=>{
  await teams.findByIdAndDelete(req.params.id)
  .then(()=>res.status(200).json({success:true, message:'Delete successfully'}))
  .catch(err=>res.status(401).json({success:false, error:err}))
}
const updateTeam = async (req,res)=>{
  await teams.findByIdAndUpdate(req.params.id, req.body)
  .then(result=>res.status(200).json({success:true, result}))
  .catch(err=>res.status(400).json({success:false, error:err}))
}

const getTeamsById= async (req,res)=>{
  await teams.findById(req.params.id)
  .then((data)=>{
    if(!data){
      return res.json({success:false, message:'No teams found!'})
    }
    return res.status(200).json({success:true, data:data})
  })
  .catch(err=>{
    if(err) res.status(400).json({success:false, error:err})
  })
}

module.exports = {
  createTeams,
  getTeams,
  deleteTeams,
  updateTeam,
  getTeamsById
};
