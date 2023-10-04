import { motion } from 'framer-motion';
import NavBottomNavigation from '../components/nav';

interface PropsLayout {
    children: React.ReactNode;
}

export function Layout(props: PropsLayout) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            style={{
                overflow: 'hidden auto'
            }}
        >
            {props.children}
            <NavBottomNavigation />
        </motion.div>
    )
}
