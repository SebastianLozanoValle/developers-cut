'use client'
import {
    motion,
    useMotionValueEvent,
    useScroll
} from 'framer-motion'
import {
    useEffect,
    useState
} from 'react'

export const Divice = () => {
    const { scrollYProgress } = useScroll()
    const [scrollPosition, setScrollPosition] = useState(0)
    const [leftPosition, setLeftPosition] = useState('75%'); 
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        setScrollPosition(latest);
        const newLeft = 75 - (scrollPosition - 0.5952512424075097) * 50 / (1 - 0.5952512424075097);
        setLeftPosition(newLeft + '%');
        console.log(newLeft);
    });
    useEffect(() => {
        // Regla de tres:
        // (scrollPosition - 0.5952512424075097) / (1 - 0.5952512424075097) = (leftPosition - 75) / (25 - 75)
        
    }, [scrollPosition]);

    return (
        <motion.div
            initial={{ opacity: 1, position: 'fixed', left: '75%', top: '80%' }}
            animate={{ 
                top: scrollPosition > 0.07 ? '50%' : '80%',
                left: scrollPosition > 0.5952512424075097 ? leftPosition : '75%', 
            }}
            style={{
                transform: 'translate(-50%, -50%)',
                transition: 'left 1s ease, top 1s ease',
            }}
        >
            <div className="card">
  
                <div className="btn1"></div>
                <div className="btn2"></div>
                <div className="btn3"></div>
                <div className="btn4"></div>
                <div className="card-int">
                    <div className="hello">Hello
                    <span className="hidden">uiverse</span>
                    </div>
                </div>
                <div className="top">
                    <div className="camera">
                    <div className="int"></div>
                    </div>
                    <div className="speaker"></div>
                </div>
            </div>
        </motion.div>
    )
}