import { Dashboard } from '../pages'

export default [
    {
        name: 'Página inicial',
        path: "/",
        element: <Dashboard/>,
        icon: 'dashboard',
    },
    {
        name: 'Contato',
        path: "/contact",
        element: <div>Contact</div>,
        icon: 'contact_mail'
    },
];