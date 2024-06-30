import React, { useState } from 'react';

interface ProfileData {
  name: string;
  description: string;
  degree: string;
  university: string;
  graduationDate: string;
}

const ProfileForm: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData>({
    name: '',
    description: '',
    degree: '',
    university: '',
    graduationDate: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { name, description, degree, university, graduationDate } = profile;
    if (!name || !description || !degree || !university || !graduationDate) {
      setError('Please complete the profile before saving.');
    } else {
      setError(null);
      // Save the profile data
      // Here you can save the data to your analytics component or backend
      console.log('Profile saved:', profile);
      // Reset form
      setProfile({
        name: '',
        description: '',
        degree: '',
        university: '',
        graduationDate: '',
      });
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="bg-purple-700 p-6 rounded-lg shadow-lg w-4/5 max-w-lg">
        <h1 className="text-3xl font-bold text-white mb-4">Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="text-white">Name:</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="text-white">Description:</label>
            <textarea
              name="description"
              value={profile.description}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Education</h2>
            <label className="text-white">Degree Name:</label>
            <input
              type="text"
              name="degree"
              value={profile.degree}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="text-white">University/College Name:</label>
            <input
              type="text"
              name="university"
              value={profile.university}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="text-white">Graduation Date:</label>
            <input
              type="text"
              name="graduationDate"
              value={profile.graduationDate}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
