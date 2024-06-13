import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    if (name === "" || quantity === "" || price === "" || image === "") {
      alert("All field required, Please fill all the input");
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3000/api/products", {
        name: name,
        quantity: quantity,
        price: price,
        image: image,
      });

      toast.success(`Lưu Sản Phẩm: ${response.data.name} Thành Công!`, {
        className: 'text-[15px]' // Điều chỉnh kích thước phông chữ ở đây, ví dụ: text-lg
      });
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold text-2xl mb-4 block text-center">
        Tạo Một Sản Phẩm
      </h2>
      <form onSubmit={saveProduct}>
        <div className="space-y-2">
          <div>
            <label>Tên Sản Phẩm</label>
            <input
              type="text"
              value={name}
              className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
              placeholder="Nhập Tên Sản Phẩm"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Số Lượng</label>
            <input
              type="number"
              value={quantity}
              className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
              placeholder="Nhập Số Lượng"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Giá</label>
            <input
              type="number"
              value={price}
              className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
              placeholder="Nhập Giá"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">URL Hình Ảnh</label>
            <input
              type="text"
              value={image}
              className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
              placeholder="Thêm URL Hình Ảnh"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div>
            {!isLoading && (
              <button className="block w-full mt-6 bg-gray-700 text-white px-4 py-2 rounded-sm hover:bg-gray-600 font-semibold">
                Lưu Và Tạo Sản Phẩm
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
