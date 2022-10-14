import { useState } from "react";
import "./app-create-form.scss";

const AppCreateForm = ({productPrice, productTitle, productDescription}) => {
  const [title, setTitle] = useState(productTitle);
  const [price, setPrice] = useState(productPrice);
  const [description, setDescription] = useState(productDescription);

  const createProduct = (e) => {
    e.preventDefault();
    if (!title && price === "" && !description) return;
    console.log({
      title,
      price: Number(price),
      description,
    });
    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <form className="create-form" onSubmit={createProduct}>
      <label htmlFor="title">Product Title</label>
      <input
        type="text"
        id="title"
        placeholder="Enter title here"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="price">Product Price</label>
      <input
        type="number"
        id="price"
        placeholder="Enter price here"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <label htmlFor="description">Product Description</label>
      <textarea
        id="description"
        placeholder="Enter descr hereiption"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button type="submit">create</button>
    </form>
  );
};

export default AppCreateForm;
