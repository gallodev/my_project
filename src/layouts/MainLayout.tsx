import { Header, Footer} from '../components'
import { Box } from '@mui/material'


interface IMainLayout {
    children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayout> = ({ children }) => {
    return (
        <Box>
            <Box>
                <Header/>
            </Box>
            <Box>
                {children}
            </Box>
            <Box>
                <Footer/>
            </Box>
        </Box>
    )
}