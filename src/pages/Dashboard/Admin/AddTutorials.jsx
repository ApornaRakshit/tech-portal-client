import React, { useState } from "react";
import { db } from "../../../firebase/firebase.init";
import { collection, addDoc } from "firebase/firestore";
import Tutorials from "../../Tutorials";

const AddTutorials = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");

  const submit = async () => {
    if (!title || !link || !category) return alert("All fields required");

    await addDoc(collection(db, "tutorials"), {
      title,
      link,
      category,
      createdAt: new Date(),
    });

    setTitle("");
    setLink("");
    setCategory("");
    alert("Tutorial Added!");
  };

  return (
    
     

      
        <Tutorials></Tutorials>

        
    
  );
};

export default AddTutorials;
