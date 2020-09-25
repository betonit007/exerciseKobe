const router = require("express").Router();
const Workout = require("../models/Workout");

// Using 17-NoSQL activity #7 these routes
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      // console.log("dbWorkout", data);
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log("error", err);
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Helpful!! Ins-populate class 17 NoSQL activity #14
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
