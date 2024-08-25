import React from 'react';
import Select from 'react-select';

const MultiSelectDropdown = ({ options, selectedOptions, setSelectedOptions }) => {
    const handleChange = (selected) => {
        setSelectedOptions(selected);
    };

    return (
        <Select
            isMulti
            options={options}
            value={selectedOptions}
            onChange={handleChange}
            placeholder="Select filters..."
            styles={{
                control: (base) => ({
                    ...base,
                    marginTop: '10px',
                    minWidth: '300px',
                }),
            }}
        />
    );
};

export default MultiSelectDropdown;
