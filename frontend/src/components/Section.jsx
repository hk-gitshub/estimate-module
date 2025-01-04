import React, { useState } from "react";
import ItemRow from "./ItemRow";

const Section = ({ section, sections, setSections }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const handleItemUpdate = (updatedItem) => {
        const updatedSections = sections.map((sec) =>
            sec.section_id === section.section_id
                ? {
                    ...sec,
                    items: sec.items.map((item) =>
                        item.item_id === updatedItem.item_id ? updatedItem : item
                    ),
                }
                : sec
        );
        setSections(updatedSections);
    };

    const sectionTotal = section.items.reduce(
        (acc, item) => acc + (item.quantity * item.unit_cost) / 100,
        0
    );

    return (
        <div className="mb-6 bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center justify-between cursor-pointer border-b pb-2" onClick={toggleCollapse}>
                <span className="flex gap-2">
                    <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
                        {isCollapsed ? "🔽" : "🔼"}
                    </button>

                    <h3 className="text-lg font-semibold text-gray-800">{section.section_name}</h3>

                </span>
                <div className="text-green-700 font-bold text-base">
                    ${sectionTotal.toFixed(2)}
                </div>

            </div>
            {!isCollapsed && (
                <div className="overflow-x-auto mt-4">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 text-left">Type</th>
                                <th className="py-2 px-4 text-left">Item Name</th>
                                <th className="py-2 px-4 text-left">Quantity</th>
                                <th className="py-2 px-4 text-left">Unit Cost</th>
                                <th className="py-2 px-4 text-left">Unit</th>
                                <th className="py-2 px-4 text-right">Total</th>
                                <th className="py-2 px-4 text-center">Tax</th>
                                <th className="py-2 px-4 text-left">Cost Code</th>
                                <th className="py-2 px-4 text-left"></th>

                            </tr>
                        </thead>
                        <tbody>
                            {section.items.map((item) => (
                                <ItemRow key={item.item_id} item={item} onItemUpdate={handleItemUpdate} />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Section;
