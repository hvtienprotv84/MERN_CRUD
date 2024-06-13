import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditPage = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
  });
  const navigate = useNavigate();

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/products/${id}`
      );
      setProduct({
        name: response.data.name,
        quantity: response.data.quantity,
        price: response.data.price,
        image: response.data.image,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.put(`http://localhost:3000/api/products/${id}`, product);
      setIsLoading(false);
      toast.success(`Sản Phẩm Đã Được Cập Nhật Thành Công!`);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold text-2xl mb-4 block text-center">
        Cập Nhật Một Sản Phẩm
      </h2>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
           <form onSubmit={updateProduct}>
          <div className="space-y-2">
            <div>
              <label>Tên Sản Phẩm</label>
              <input
                type="text"
                value={product.name}
                className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
                placeholder="Nhập Tên Sản Phẩm"
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="">Số Lượng</label>
              <input
                type="number"
                value={product.quantity}
                className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
                placeholder="Nhập Số Lượng"
                onChange={(e) =>
                  setProduct({ ...product, quantity: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="">Giá</label>
              <input
                type="number"
                value={product.price}
                className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
                placeholder="Nhập Giá"
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="">URL Hình Ảnh</label>
              <input
                type="text"
                value={product.image}
                className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
                placeholder="Thêm URL Hình Ảnh"
                onChange={(e) =>
                  setProduct({ ...product, image: e.target.value })
                }
              />
            </div>
            <div>
              {!isLoading && (
                <button className="block w-full mt-6 bg-gray-700 text-white px-4 py-2 rounded-sm hover:bg-gray-600 font-semibold">
                  Cập Nhật
                </button>
              )}
            </div>
          </div>
        </form>
        </>
       
      )}
    </div>
  );
};

export default EditPage;
