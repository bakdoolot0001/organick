import React, { useEffect, useState } from "react";
import "./Admin.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Admin = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");
  const [category, setCategory] = useState("");

  const onChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  function errorToast() {
    toast.error("Заполните пустые поля!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function succesToast() {
    toast.success("Продукт добавлен успешно!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  async function addProduct() {
    if (!image || !name || !price || !des || !category) {
      errorToast();
    } else {
      const dataProduct = {
        image: image,
        name: name,
        price: price,
        des: des,
        category: category,
      };
      await axios.post(
        `https://6800f7c081c7e9fbcc4107e5.mockapi.io/api/v1/organick`,
        dataProduct
      );
      succesToast();
      setImage("");
      setName("");
      setDes("");
      setCategory("");
      setPrice("");
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="admin">
      <div className="container">
        <div className="admin">
          <h1>Product Upload</h1>
          <form className="admin-form">
            <div className="form-grid">
              <div className="form-left">
                <div
                  className="form-photo"
                  style={image ? { backgroundImage: `url(${image})` } : {}}
                >
                  <input
                    type="file"
                    accept="image/*"
                    id="image-upload"
                    onChange={onChange}
                    className="image-input"
                  />
                  <label htmlFor="image-upload" className="image-label">
                    {image ? "Change Image" : "Upload Image"}
                  </label>
                </div>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-select"
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="vegetables">Vegetables</option>
                  <option value="fresh">Fresh</option>
                  <option value="millets">Millets</option>
                  <option value="health">Health</option>
                  <option value="nuts">Nuts</option>
                </select>
              </div>

              <div className="form-right">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter product name"
                  />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                    placeholder="Enter description"
                    rows="4"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Price</label>
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    placeholder="Enter price"
                  />
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="submit-btn" onClick={() => addProduct()}>
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Admin;
