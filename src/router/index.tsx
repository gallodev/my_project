import { Route, Routes } from "react-router-dom"
import routes from './router';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route {...route} />
            ))}
        </Routes>
    )
}