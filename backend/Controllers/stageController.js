import Stage from "../models/stage.js"; // Use PascalCase for the model name
export const createStage = async (req, res) => {
  const stageData = req.body; // Rename to avoid conflict with the model

  // Validate input
  if (!stageData.name || !stageData.image) {
    return res.status(400).json({ success: false, message: "Provide all the details" });
  }

  // Create a new Stage instance
  const newStage = new Stage(stageData);

  try {
    await newStage.save(); // Save the stage to the database
    res.status(201).json({ success: true, data: newStage });
  } catch (error) {
    console.error("Error in createStage:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const getStage = async (req, res) => {
    const { id } = req.params; // Use req.params to get the ID
  
    try {
      // Find the stage by ID
      const stage = await Stage.findById(id);
  
      // If no stage is found
      if (!stage) {
        return res.status(404).json({ success: false, message: "Stage not found" });
      }
  
      // Send back the stage data
      res.status(200).json({ success: true, data: stage });
    } catch (error) {
      console.error("Error in getStage:", error.message);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };
  