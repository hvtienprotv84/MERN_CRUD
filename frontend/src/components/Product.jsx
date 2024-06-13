/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Product = ({ product, getProducts }) => {
  const deleteProduct = async (id) => {
    const result = await Swal.fire({
      title: "Bạn có muốn xóa sản phẩm này không?",
      //text: "You won't be able to revert this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4D52E8",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa Sản Phẩm",
      cancelButtonText: "Không Xóa"  // Thêm nút "Không" và cung cấp văn bản cho nút này
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/api/products/${id}`);
        toast.success(`Đã Xóa Sản Phẩm Thành Công!`);
        //After Delete call getProducts again
        getProducts();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.image}
        className="w-full h-[180px] object-contain mt-[10px]"
      />
      <div className="px-4 pt-2 pb-4">
        <h2 className="text-lg font-semibold">Tên: {product.name}</h2>
        <div className="text-base">Số Lượng: {product.quantity}</div>
        <div className="text-base">Giá: {product.price}đ</div>
        <div className="mt-2 flex gap-4">
          <Link
            to={`/edit/${product._id}`}
            className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-t-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer"
          >
            {" "}
            Chỉnh Sửa
          </Link>
          <button
            onClick={() => deleteProduct(product._id)}
            className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-t-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
