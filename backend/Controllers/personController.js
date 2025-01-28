import Person from "../models/Person.js"; // Use PascalCase for the model name
export const createPerson = async (req, res) => {
  const personData = req.body; // Rename to avoid conflict with the model

  // Validate input
  if (!personData.name || !personData.description || !personData.face || !personData.punch || !personData.kick || !personData.stand) {
    return res.status(400).json({ success: false, message: "Provide all the details" });
  }

  const newPerson = new Person(personData);

  try {
    await newPerson.save(); 
    res.status(201).json({ success: true, data: newPerson });
  } catch (error) {
    console.error("Error in createPlayer:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const getPerson = async (req, res) => {
    const { id } = req.params; 
  
    try {
      
      const person = await Person.findById(id);
  
   
      if (!person) {
        return res.status(404).json({ success: false, message: "Player not found" });
      }
  
 
      res.status(200).json({ success: true, data: person });
    } catch (error) {
      console.error("Error in getPerson:", error.message);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };

  export const getPersons = async (req, res) => {
    try {
      const personsCount = await Person.countDocuments(); // Check how many persons exist in the collection
      console.log("Total persons in database:", personsCount);
  
      const persons = await Person.find({});
      res.status(200).json({ success: true, data: persons });
    } catch (error) {
      console.error("Error in getPersons:", error.message);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };
  
  