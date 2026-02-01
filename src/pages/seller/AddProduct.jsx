import { useState } from "react";
import { addSellerProduct  } from "../../services/sellerApi";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    brand: "",
    mrp: "",
    sellingPrice: "",
    stock: "",
    delivery: "",
    tags: "",
  });

  const [discount, setDiscount] = useState(0);

  const [featureGroups, setFeatureGroups] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [featureKey, setFeatureKey] = useState("");
  const [featureValue, setFeatureValue] = useState("");
  const [activeGroupIndex, setActiveGroupIndex] = useState(null);

  const [colors, setColors] = useState([]);
  const [colorInput, setColorInput] = useState("");
  const [images, setImages] = useState({});

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);

    if (updated.mrp && updated.sellingPrice) {
      const d =
        ((updated.mrp - updated.sellingPrice) / updated.mrp) * 100;
      setDiscount(d.toFixed(1));
    }
  };

  /* -------- Feature Groups -------- */
  const addGroup = () => {
    if (!groupName) return;

    setFeatureGroups([
      ...featureGroups,
      { groupName, items: [] },
    ]);

    setGroupName("");
  };

  const addFeature = () => {
    if (!featureKey || !featureValue || activeGroupIndex === null) return;

    const updated = [...featureGroups];
    updated[activeGroupIndex].items.push({
      key: featureKey,
      value: featureValue,
    });

    setFeatureGroups(updated);
    setFeatureKey("");
    setFeatureValue("");
  };

  const removeFeature = (groupIndex, itemIndex) => {
    const updated = [...featureGroups];
    updated[groupIndex].items.splice(itemIndex, 1);
    setFeatureGroups(updated);
  };

  /* -------- Colors -------- */
  const addColor = () => {
    if (!colorInput) return;

    setColors([...colors, colorInput]);
    setImages({ ...images, [colorInput]: [] });
    setColorInput("");
  };

  const handleImageUpload = (color, files) => {
    setImages({
      ...images,
      [color]: files,
    });
  };

  /* SUBMIT  */
  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const color of colors) {
      if (!images[color] || images[color].length < 3) {
        alert(`Minimum 3 images required for color: ${color}`);
        return;
      }
    }

    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    const tagsArray = form.tags.split(",").map((t) => t.trim());

    formData.append("tags", JSON.stringify(tagsArray));
    formData.append("colors", JSON.stringify(colors));
    formData.append("features", JSON.stringify(featureGroups));

    Object.keys(images).forEach((color) => {
      images[color].forEach((file) => {
        formData.append(`images[${color}]`, file);
      });
    });

    try {
      await addSellerProduct (formData);
      navigate("/seller/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Upload failed");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* BASIC INFO */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h3 className="font-semibold border-b pb-2">
            Basic Information
          </h3>

          <input name="title" placeholder="Title"
            onChange={handleChange}
            className="w-full border p-2 rounded" required />

          <textarea name="description" placeholder="Description"
            onChange={handleChange}
            className="w-full border p-2 rounded" />

          <div className="grid grid-cols-2 gap-4">
            <input name="category" placeholder="Category"
              onChange={handleChange}
              className="border p-2 rounded" required />
            <input name="brand" placeholder="Brand"
              onChange={handleChange}
              className="border p-2 rounded" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input name="mrp" type="number"
              placeholder="MRP"
              onChange={handleChange}
              className="border p-2 rounded" required />
            <input name="sellingPrice" type="number"
              placeholder="Selling Price"
              onChange={handleChange}
              className="border p-2 rounded" required />
          </div>

          <p className="text-green-600">
            Discount: {discount}%
          </p>

          <input name="tags"
            placeholder="Tags comma separated"
            onChange={handleChange}
            className="border p-2 rounded w-full" />

        </div>

        {/* FEATURES */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Features</h3>

          <div className="flex gap-2 mb-4">
            <input value={groupName}
              onChange={(e)=>setGroupName(e.target.value)}
              className="border p-2 rounded w-full"
              placeholder="Group Name"/>
            <button type="button"
              onClick={addGroup}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700  text-white px-4 rounded">
              Add
            </button>
          </div>

          {featureGroups.map((g, i)=>(
            <div key={i} className="border p-3 rounded mb-3">
              <h4>{g.groupName}</h4>

              <div className="flex gap-2">
                <input placeholder="Key"
                  onFocus={()=>setActiveGroupIndex(i)}
                  value={featureKey}
                  onChange={(e)=>setFeatureKey(e.target.value)}
                  className="border p-2 rounded w-full"/>
                <input placeholder="Value"
                  value={featureValue}
                  onChange={(e)=>setFeatureValue(e.target.value)}
                  className="border p-2 rounded w-full"/>
                <button type="button"
                  onClick={addFeature}
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700 text-white px-3 rounded">
                  Add
                </button>
              </div>

              <ul className="mt-2">
                {g.items.map((it,idx)=>(
                  <li key={idx}
                    className="flex justify-between">
                    {it.key}: {it.value}
                    <button
                      type="button"
                      onClick={()=>removeFeature(i,idx)}
                      className="text-red-500">
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* COLORS & IMAGES */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-3">
            Colors & Images
          </h3>

          <div className="flex gap-2 mb-3">
            <input value={colorInput}
              onChange={(e)=>setColorInput(e.target.value)}
              className="border p-2 rounded w-full"
              placeholder="Color"/>
            <button type="button"
              onClick={addColor}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700 px-4 text-white rounded">
              Add
            </button>
          </div>

          {colors.map(color=>(
            <div key={color}
              className="border p-3 rounded mb-3">

              <p>{color} Images</p>

              <div
                className="border-dashed border-2 p-4 rounded"
                onDragOver={(e)=>e.preventDefault()}
                onDrop={(e)=>{
                  e.preventDefault();
                  handleImageUpload(color,
                    Array.from(e.dataTransfer.files));
                }}
              >
                Drag & Drop or Select
                <input type="file" multiple
                  onChange={(e)=>
                    handleImageUpload(color,
                      Array.from(e.target.files))
                  }
                />

                <div className="flex gap-2 mt-2 flex-wrap">
                  {images[color]?.map((file,i)=>(
                    <img key={i}
                      src={URL.createObjectURL(file)}
                      className="w-20 h-20 object-cover border rounded"
                    />
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* PREVIEW */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Preview</h3>

          <div className="flex gap-4">
            {colors[0] && images[colors[0]]?.[0] && (
              <img
                src={URL.createObjectURL(images[colors[0]][0])}
                className="w-32 h-32 object-cover border rounded"
              />
            )}

            <div>
              <h4>{form.title}</h4>
              <p>{form.category}</p>
              <p className="text-blue-600 font-bold">
                ₹{form.sellingPrice}
              </p>
              <p className="line-through text-gray-400">
                ₹{form.mrp}
              </p>
            </div>
          </div>
        </div>

        {/* SUBMIT */}
        <button
          className="w-full py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700 rounded-lg text-lg">
          Save Product
        </button>

      </form>
    </div>
  );
};

export default AddProduct;
