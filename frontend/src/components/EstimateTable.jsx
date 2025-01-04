import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import Section from "./Section";

const EstimateTable = () => {
    const [sections, setSections] = useState([]);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        const loadSections = async () => {
            const response = await fetchData();
            console.log(response);

            if (response && response.data) {
                setSections(response.data.sections);
                calculateGrandTotal(response.data.sections);
            }
        };
        loadSections();
    }, []);

    const calculateGrandTotal = (sections) => {
        const total = sections.reduce((acc, section) => {
            const sectionTotal = section.items.reduce(
                (sum, item) => sum + (item.quantity * item.unit_cost) / 100,
                0
            );
            return acc + sectionTotal;
        }, 0);
        setGrandTotal(total);
    };

    const handleSectionUpdate = (updatedSections) => {
        setSections(updatedSections);
        calculateGrandTotal(updatedSections);
    };

    return (
        <div className="mx-auto bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Estimate Details</h1>
            <div className="text-right mb-4">
                <span className="text-xl font-semibold">Grand Total:</span>
                <span className="font-bold text-green-700 p-1">
                    ${grandTotal.toFixed(2)}
                </span>
            </div>
            {sections.map((section) => (
                <Section
                    key={section.section_id}
                    section={section}
                    sections={sections}
                    setSections={handleSectionUpdate}
                />
            ))}
        </div>
    );
};

export default EstimateTable;
