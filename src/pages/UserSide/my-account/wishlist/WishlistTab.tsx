
import { useState } from "react";

function WishlistTab() {
  const [checkedItems, setCheckedItems] = useState<number | null>(null);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  // Handle checkbox change: allow only one item to be selected
  const handleCheckboxChange = (index: number) => {
    setCheckedItems((prev) => (prev === index ? null : index)); // Toggle the item selection
  };

  // Handle delete action
  const handleDelete = () => {
    if (checkedItems !== null) {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete the selected item?"
      );
      if (confirmDelete) {
        // Proceed with the deletion logic
        console.log("Item deleted.");
        setCheckedItems(null); // Reset selected item after deletion
      }
    } else {
      alert("No item selected.");
    }
  };
  return (
    <div className="flex flex-col gap-3">
      {/* header */}
      <div className="flex justify-between items-center">
        <span className="sm:text-sm text-xs">Wishlist</span>
        {selectAll ? (
          <div className="space-x-3">
            <span
              className="sm:text-sm text-xs cursor-pointer"
              onClick={() => setSelectAll(false)}
            >
              Deselect all
            </span>
            <button className="sm:text-sm text-xs">Delete All</button>
          </div>
        ) : (
          <span
            className="sm:text-sm text-xs cursor-pointer"
            onClick={() => setSelectAll(true)}
          >
            Select all
          </span>
        )}
      </div>

      {/* body starts */}
      <div className="flex flex-col gap-3">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className={`flex gap-3 justify-between w-full border ${checkedItems === i || selectAll ? "border-textMain" : ""}  sm:p-4 p-2 rounded-md`}
          >
            <div className="flex gap-3 cr">
              <img
                src="/public/img/products/image 79.png"
                alt="wishlist img"
                className="text-xs w-14"
              />
              <label
                htmlFor={`wishlist-${i}`}
                className="flex flex-col cursor-pointer"
              >
                <div className="sm:w-10/12">
                  <span className="sm:text-lg text-sm text-black">
                    Oversized 100% Cotton 190GSM 240GSM Plain White T Shirt
                  </span>
                </div>
                <div className="flex sm:gap-3 gap-1 sm:flex-row flex-col">
                  <span className="sm:text-sm text-xs">$4.69 - $5.68</span>
                  <span className="sm:text-sm text-xs">
                    Min. order: 10.0 pieces
                  </span>
                </div>
              </label>
            </div>
            {/* =====  */}
            <div className="flex flex-col justify-between items-end">
            <input
                type="checkbox"
                id={`wishlist-${i}`}
                checked={checkedItems === i}
                onChange={() => handleCheckboxChange(i)}
                className="hidden" // Hide checkbox
              />
              <button className="sm:text-sm text-xs text-gray-400" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishlistTab;
