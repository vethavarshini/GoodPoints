import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateRequest = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    area: "",
    description: "",
    priority: "",
    deadline: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.area.trim()) newErrors.area = "Area is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.priority) newErrors.priority = "Select urgency level";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Submitted Data:", formData);
      setIsSubmitting(false);
      navigate("/my-requests");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-purple-100">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-purple-100">
          <h1 className="text-2xl font-semibold text-purple-700">
            Create Help Request
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Fill in the details below to post your request.
          </p>
        </div>

        {/* Form */}
        <div className="px-6 py-8 space-y-4">

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Need help moving a couch"
              className="w-full rounded-xl border border-gray-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />
            {errors.title && (
              <p className="text-xs text-red-500 mt-1">{errors.title}</p>
            )}
          </div>

          {/* Category + Area */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              >
                <option value="">Select one</option>
                <option>Medical</option>
                <option>Food</option>
                <option>Transportation</option>
                <option>Household</option>
                <option>Other</option>
              </select>
              {errors.category && (
                <p className="text-xs text-red-500 mt-1">{errors.category}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Neighborhood / Area
              </label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Downtown"
                className="w-full rounded-xl border border-gray-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              />
              {errors.area && (
                <p className="text-xs text-red-500 mt-1">{errors.area}</p>
              )}
            </div>
          </div>

          {/* Priority + Deadline */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Urgency Level
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              >
                <option value="">Select urgency</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              {errors.priority && (
                <p className="text-xs text-red-500 mt-1">{errors.priority}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              rows={4}
              maxLength={300}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide some details..."
              className="w-full resize-none rounded-xl border border-gray-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />
            <div className="flex justify-between mt-1">
              {errors.description && (
                <p className="text-xs text-red-500">{errors.description}</p>
              )}
              <p className="text-xs text-gray-400">
                {formData.description.length}/300
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              onClick={() => navigate(-1)}
              className="rounded-xl px-6 py-2.5 text-sm font-medium border border-gray-800 text-gray-600 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="rounded-xl px-6 py-2.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 shadow-sm transition disabled:opacity-60"
            >
              {isSubmitting ? "Posting..." : "Post Request"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateRequest;