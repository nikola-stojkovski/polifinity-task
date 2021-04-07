export const menuItemProperties = [
    {
        name: 'menuItemNumber',
        description: "Choose menu item",
        validator: /^[0-9]*$/,
        warning: 'You must enter only numbers',
        required: true
    }
];

export const searchItemProperties = [
    {
        name: 'searchTerm',
        description: "Enter ingredient",
        validator: /^[a-zA-Z\s]+$/,
        warning: 'Name must be only letters or spaces',
        required: true
    }
]