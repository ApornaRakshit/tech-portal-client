// EditProfileModal.jsx

import React, { useState } from "react";
import { db } from "../../firebase/firebase.init";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";

const EditProfileModal = ({ profile, close }) => {
  const [form, setForm] = useState(profile);
  const storage = getStorage();

  const [newSkill, setNewSkill] = useState("");

  // Update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // nested academic fields
    if (name.startsWith("academic.")) {
      const field = name.split(".")[1];
      setForm({
        ...form,
        academic: { ...form.academic, [field]: value }
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Add skill
  const addSkill = () => {
    if (!newSkill.trim()) return;
    const updated = [...(form.skills || []), newSkill.trim()];
    setForm({ ...form, skills: updated });
    setNewSkill("");
  };

  // Remove skill
  const removeSkill = (sk) => {
    const updated = form.skills.filter((item) => item !== sk);
    setForm({ ...form, skills: updated });
  };

  // Upload profile image
  const uploadProfilePic = async (file) => {
    const fileRef = ref(storage, `profileImages/${form.uid}.jpg`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    setForm({ ...form, photoURL: url });
    toast.success("Profile picture updated!");
  };

  // Upload Resume
  const uploadResume = async (file) => {
    const fileRef = ref(storage, `resumes/${form.uid}.pdf`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    setForm({ ...form, resumeURL: url });
    toast.success("Resume uploaded!");
  };

  // Save to Firestore
  const saveChanges = async () => {
    try {
      const refDB = doc(db, "users", form.uid);
      await updateDoc(refDB, form);

      toast.success("Profile updated!");
      close();
    } catch (err) {
      console.error(err);
      toast.error("Update failed!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-7 w-full max-w-2xl rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">

        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

        {/* Profile Picture */}
        <label className="font-semibold">Profile Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => uploadProfilePic(e.target.files[0])}
          className="mb-4"
        />

        {/* Basic Fields */}
        <label>Name</label>
        <input
          name="name"
          className="input input-bordered w-full mb-3"
          value={form.name}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          name="phone"
          className="input input-bordered w-full mb-3"
          value={form.phone}
          onChange={handleChange}
        />

        <label>Bio</label>
        <textarea
          name="bio"
          className="textarea textarea-bordered w-full mb-3"
          value={form.bio}
          onChange={handleChange}
        />

        <h3 className="text-xl font-bold mt-4">Academic Info</h3>

        <input
          name="academic.studentId"
          placeholder="Student ID"
          className="input input-bordered w-full mb-3"
          value={form.academic?.studentId}
          onChange={handleChange}
        />

        <input
          name="academic.department"
          placeholder="Department"
          className="input input-bordered w-full mb-3"
          value={form.academic?.department}
          onChange={handleChange}
        />

        <input
          name="academic.session"
          placeholder="Session"
          className="input input-bordered w-full mb-3"
          value={form.academic?.session}
          onChange={handleChange}
        />

        <input
          name="academic.semester"
          placeholder="Semester"
          className="input input-bordered w-full mb-3"
          value={form.academic?.semester}
          onChange={handleChange}
        />

        <input
          type="date"
          name="academic.dob"
          className="input input-bordered w-full mb-3"
          value={form.academic?.dob}
          onChange={handleChange}
        />

        {/* Resume Upload */}
        <label className="font-semibold">Upload Resume (PDF)</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => uploadResume(e.target.files[0])}
          className="mb-5"
        />

        {/* Skills */}
        <h3 className="text-xl font-bold mt-4">Skills</h3>

        <div className="flex gap-2 mb-3">
          <input
            placeholder="Add new skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="input input-bordered flex-1"
          />
          <button onClick={addSkill} className="btn btn-primary">Add</button>
        </div>

        <div className="flex flex-wrap gap-2">
          {form.skills?.map((sk) => (
            <span key={sk} className="px-3 py-1 rounded-full bg-purple-200 flex items-center gap-2">
              {sk}
              <button
                onClick={() => removeSkill(sk)}
                className="text-red-600 font-bold"
              >
                ×
              </button>
            </span>
          ))}
        </div>

        {/* Save Buttons */}
        <div className="flex justify-end mt-6 gap-3">
          <button className="btn" onClick={close}>Cancel</button>
          <button className="btn btn-primary" onClick={saveChanges}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
