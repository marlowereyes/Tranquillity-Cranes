import React from "react";

function quoteBox({ generateQuote, onSelectChange, selectedValue }) {
    const quoteFilterOptions = [ 
        "Filter",
        "Inspiration",
        "Motivation",
        "Academic",
        "Religious",
        "Masculine",
        "Feminie",
    ];
    const handleSelectChange = (e) => {
        conSelectChange(e.target.value);
    };

    return (
        <></>
    )
}