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
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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

    // Simulate API call
    setTimeout(() => {
      console.log("Submitted Data:", formData);

      setIsSubmitting(false);
      navigate("/my-requests");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white shadow-sm">
        
        {/* HEADER */}
        <div className="border-b px-6 py-5">
          <h1 className="text-xl font-bold text-slate-800">
            Create Help Request
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Describe what you need help with. The community is here for you.
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-5 px-6 py-6">

          {/* TITLE */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="E.g. Need help moving a couch"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
            />
            {errors.title && (
              <p className="mt-1 text-xs text-red-500">{errors.title}</p>
            )}
          </div>

          {/* CATEGORY + AREA */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
              >
                <option value="">Select one</option>
                <option>Medical</option>
                <option>Food</option>
                <option>Transportation</option>
                <option>Household</option>
                <option>Other</option>
              </select>
              {errors.category && (
                <p className="mt-1 text-xs text-red-500">{errors.category}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Neighborhood / Area
              </label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="E.g. Downtown"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
              />
              {errors.area && (
                <p className="mt-1 text-xs text-red-500">{errors.area}</p>
              )}
            </div>
          </div>

          {/* PRIORITY + DEADLINE */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Urgency Level
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
              >
                <option value="">Select urgency</option>
                <option value="low">Low 🟢</option>
                <option value="medium">Medium 🟡</option>
                <option value="high">High 🔴</option>
              </select>
              {errors.priority && (
                <p className="mt-1 text-xs text-red-500">{errors.priority}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Description
            </label>
            <textarea
              rows={4}
              maxLength={300}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide some details about what you need..."
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
            />
            <div className="flex justify-between">
              {errors.description && (
                <p className="text-xs text-red-500">{errors.description}</p>
              )}
              <p className="text-xs text-slate-400">
                {formData.description.length}/300
              </p>
            </div>
          </div>
          {/* ACTIONS */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={() => navigate(-1)}
              className="rounded-xl border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-60"
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