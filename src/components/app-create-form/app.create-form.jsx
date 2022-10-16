import { useState } from "react";
import { AppContext } from "../app-provider/app-provider";
import { useContext } from "react";
import "./app-create-form.scss";

const randomProductId = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const AppCreateForm = ({
  productPrice,
  productTitle,
  productDescription,
  btnText,
}) => {
  const [title, setTitle] = useState(productTitle ? productTitle : "");
  const [price, setPrice] = useState(productPrice ? productPrice : "");
  const [description, setDescription] = useState(
    productDescription ? productDescription : ""
  );
  const { createProducts } = useContext(AppContext);

  const createProduct = (e) => {
    e.preventDefault();
    if (!title && price === "" && !description) return;
    createProducts({
      title,
      price: Number(price),
      description: description.split('" "').join(''),
      id: randomProductId(1, 25000),
      quantity: 1
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
      <button type="submit">{btnText ? btnText : "submit"}</button>
    </form>
  );
};

export default AppCreateForm;
