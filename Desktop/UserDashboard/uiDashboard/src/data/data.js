import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.home },
    { id: 2, title: 'Budget', image: iconsImgs.budget },
    { id: 3, title: 'Transactions', image: iconsImgs.plane },
    { id: 4, title: 'Subscriptions', image: iconsImgs.wallet },
    { id: 5, title: 'Loans', image: iconsImgs.bills },
    { id: 6, title: 'Reports', image: iconsImgs.report },
    { id: 7, title: 'Savings', image: iconsImgs.wallet },
    { id: 8, title: 'Financial Advice', image: iconsImgs.wealth },
    { id: 9, title: 'Account', image: iconsImgs.user },
    { id: 10, title: 'Settings', image: iconsImgs.gears }
];

export const transactions = [
    {
        id: 11, 
        name: "Miso Amane",
        image: personsImgs.person_four,
        date: "23/12/04",
        amount: 129
    },
    {
        id: 12, 
        name: "Julia Doe",
        image: personsImgs.person_three,
        date: "23/07/21",
        amount: 2000
    },
    {
        id: 13, 
        name: "Marget Stunts",
        image: personsImgs.person_two,
        date: "23/08/25",
        amount: 3000
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automated",
        amount: 220
    },
    {
        id: 20, 
        title: "Loan Payment",
        type: "Automated",
        amount: 1600
    },
    {
        id: 21, 
        title: "Foodstuff",
        type: "Automated",
        amount: 2000
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 100
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 400
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: 12.99
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "23/12/10",
        amount: 59.99
    },
    {
        id: 26,
        title: "DSTV",
        due_date: "23/12/22",
        amount: 49.99
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 25000,
        title: "Pay kid bro’s fees",
        date_taken: "23/12/22",
        amount_left: 4000
    }
]