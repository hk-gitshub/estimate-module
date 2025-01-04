import React, { useState } from "react";

const ItemRow = ({ item, onItemUpdate }) => {
    const [quantity, setQuantity] = useState(item.quantity || 0);
    const [unitCost, setUnitCost] = useState(item.unit_cost / 100);

    const handleQuantityChange = (e) => {
        const newQuantity = parseFloat(e.target.value) || 0;
        setQuantity(newQuantity);
        onItemUpdate({ ...item, quantity: newQuantity });
    };

    const handleUnitCostChange = (e) => {
        const newUnitCost = parseFloat(e.target.value) || 0;
        setUnitCost(newUnitCost);
        onItemUpdate({ ...item, unit_cost: newUnitCost * 100 });
    };

    const total = (quantity * unitCost).toFixed(2);

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="px-4 py-2 text-sm text-gray-800">{item.item_type_display_name}</td>
            <td className="px-4 py-2 text-sm text-gray-800">{item.subject}</td>
            <td className="px-4 py-2 text-sm text-gray-800">
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="0"
                    className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring focus:ring-blue-300 text-gray-800"
                />
            </td>
            <td className="px-4 py-2 text-sm text-gray-800">
                <input
                    type="number"
                    value={unitCost}
                    onChange={handleUnitCostChange}
                    min="0"
                    step="0.01"
                    className="w-20 px-2 py-1 border rounded focus:outline-none focus:ring focus:ring-blue-300 text-gray-800"
                />
            </td>
            <td className="px-4 py-2 text-sm text-gray-800">{item.unit}</td>
            <td className="px-4 py-2 text-sm text-right text-green-600 font-semibold">${total}</td>
            <td className="px-4 py-2 text-sm text-center">
                {parseInt(item.tax_rate) ? (
                    <span className="text-green-600">✔</span>
                ) : (
                    <span className="text-red-600">✘</span>
                )}
            </td>
            <td className="px-4 py-2 text-sm text-left text-gray-800">{item.cost_code || "N/A"}</td>
            <td className="px-4 py-2 text-center">
                <button
                    className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    title="View Details"
                >
                    👁️‍🗨️
                </button>
            </td>
        </tr>
    );
};

export default ItemRow;
