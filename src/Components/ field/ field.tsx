import React from 'react';

interface IFieldProps {
    index: number;
    item: { hasItem: boolean, clicked :boolean };
    onClick: (index: number) => void;
}

const Field: React.FC<IFieldProps> = ({ index, item, onClick}) => {

    return (
        <div
            className={`field ${item.clicked ? `open` : ' '}`} onClick={() => onClick(index)}>
            {item.hasItem ? 'o' : ' '}
        </div>
    );
};

export default Field;