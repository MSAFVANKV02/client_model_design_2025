import { IOrder } from "@/types/orderTypes";

type Props = {
  orders: IOrder[];
  searchTerm: string;
  filterStatus: string;
};

export default function ReplaceOrderTab({
  orders,
  searchTerm,
  filterStatus,
}: Props) {
  const filteredOrders = orders.filter((order) => {
    // Check search term
    const matchesSearch = order.productName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Check filter status
    const matchesFilter = filterStatus
      ? order.deliveryStatus === filterStatus
      : true;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Orders List */}
      {filteredOrders.map((order) => (
        <div
          key={order.id}
          className="border p-4 rounded-lg shadow-sm flex justify-between"
        >
          {/* Product Details */}
          <div className="flex gap-4">
            <img
              src="/tshirt.jpg"
              alt="Product Image"
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-bold text-lg">{order.productName}</h3>
              <p className="text-gray-500">Subtotal: ${order.subtotal}</p>
              <div className="flex gap-2 mt-2">
                {order.itemQuantity.map((item, index) => (
                  <div key={index} className="flex items-center text-gray-500">
                    <span
                      className="inline-block w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <span className="ml-1 text-sm">
                      {item.size} x {item.count} times
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Info */}
          <div className="text-right">
            <p className="text-gray-500">Ordered on {order.orderDate}</p>
            <p className="text-green-600">Delivered on {order.deliveryDate}</p>
            <p className="text-sm text-gray-500">{order.deliveryStatus}</p>
            <button className="text-purple-600 mt-2">
              Rate & review this product
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
