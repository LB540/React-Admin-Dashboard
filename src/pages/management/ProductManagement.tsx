import { ChangeEvent, useState, FormEvent } from "react";
import AdminSidebar from "../../component/AdminSidebar";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const ProductManagement = () => {
  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>();
  const [priceUpdate, setPriceUpdate] = useState<number>();
  const [stockUpdate, setStockUpdate] = useState<number>();
  const [photoUpdate, setPhotoUpdate] = useState<string>();

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") setPhotoUpdate(reader.result);
      };
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="productManagement">
        <section>
          <strong>ID - xxxxxxxxxxddedfffffff</strong>
          <img src={photo} alt="Product" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">{stock} Available</span>
          ) : (
            <span className="red">Not Available</span>
          )}
          <h3>${price}</h3>
        </section>
        <article>
          <form onSubmit={submitHandler}>
            <h2>New Product</h2>
            <div>
              <label htmlFor="">Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={priceUpdate}
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="">Stock</label>
              <input
                required
                type="number"
                placeholder="Stock"
                value={stockUpdate}
                onChange={(e) => setStockUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="">Photo</label>
              <input required type="file" onChange={changeImageHandler} />
            </div>
            {photoUpdate && <img src={photoUpdate} alt="new image" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
