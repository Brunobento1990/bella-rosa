import { motion } from 'framer-motion';
import NavBottomNavigation from '../components/nav';
import { Header } from '../components/header';

interface PropsLayout {
    children: React.ReactNode;
}

export function Layout(props: PropsLayout) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
        >
            <Header />
            {props.children}
            <NavBottomNavigation />
        </motion.div>
    )
}