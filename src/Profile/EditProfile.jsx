import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { getUserDetails, updateUserDetails } from "../services/apiRequest";
import { toast } from "react-toastify";
import "./EditProfile.css";

const EditProfile = () => {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    profile_header_path: "",
    profile_pic_path: "",
    location: "",
    website: "",
  });
  const [originalData, setOriginalData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, [e.target.name]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserDetails(user.id);
        setFormData(response.data);
        setOriginalData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data.");
      }
    };

    if (user?.id) fetchUserData();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      await updateUserDetails(user.id, formData);
      toast.success("User updated successfully!", {
        autoClose: 3000,
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(error.response?.data?.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData(originalData);
    setError("");
    setSuccess(false);
    navigate("/dashboard");
  };

  return (
    <div className="edit-profile">
      <h1>Edit Profile</h1>
      {success && (
        <p className="success-message">Profile updated successfully!</p>
      )}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="profile-header">
          <div className="header-wrapper">
            <img
              src={formData.profile_header_path || "/default-header.jpg"}
              alt="Profile Header"
              className="header-image"
            />
            <label className="upload-header">
              <input
                type="file"
                name="profile_header_path"
                accept="image/*"
                onChange={handleImageChange}
              />
              <span>Change Header</span>
            </label>
          </div>

          <div className="profile-picture-section">
            <img
              src={formData.profile_pic_path || "/default-profile-pic.jpg"}
              alt="Profile"
              className="profile-picture"
            />
            <label className="upload-profile-pic">
              <input
                type="file"
                name="profile_pic_path"
                accept="image/*"
                onChange={handleImageChange}
              />
              <span>Change</span>
            </label>
          </div>
        </div>

        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        {/* <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
          />
        </div> */}

        <div className="button-group">
          <button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update Profile"}
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
