const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  Days: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter exercises.",
      },
      name: {
        type: String,
        required: " Name of the exercise.",
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the User model
module.exports = Workout;
