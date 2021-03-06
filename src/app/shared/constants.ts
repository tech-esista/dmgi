let constants = {
    INTERESTED_IN: [
        {id: "INTERESTED_IN_PR", text: "PR"},
        {id: "INTERESTED_IN_INVESTMENT", text: "Investments"}
    ],
    STATUSES: [
        {id: 1, text: "Published", className: 'badge-success'},
        {id: 2, text: "Draft", className: 'badge-light'},
        {id: 3, text: "Discarded", className: 'badge-danger'},
    ],
    GENDER: [
        {id: 1, text: "Male"},
        {id: 2, text: "Female"},
    ],
    USER_STATUS: [
        {id: 1, text: "Active", className: 'badge-success'},
        {id: 2, text: "Inactive", className: 'badge-light'},
    ],
    TRANSACTION_TYPES: [
        {id: 1, text: "Credited", className: 'badge-success'},
        {id: 2, text: "Debited", className: 'badge-danger'},
    ],
    SANCTIONS_STATUS: [
        {id: 1, text: "Pending", className: 'badge-light'},
        {id: 2, text: "Approved", className: 'badge-success'},
    ]
}
export default constants;
