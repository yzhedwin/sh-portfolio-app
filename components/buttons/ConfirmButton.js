import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useTime } from 'framer-motion';

export default function ConfirmButton({
    onConfirm,
    holdDuration = 2000,
}) {
    const timeoutRef = useRef(null);
    const intervalRef = useRef(null);
    const [isHolding, setIsHolding] = useState(false);
    const progressControls = useAnimation();
    const [text, setText] = useState('Hold to go GitHub');
    const [elipses, setElipses] = useState('');

    const startHold = () => {
        setIsHolding(true);
        progressControls.start({
            width: '100%',
            transition: { duration: holdDuration / 1000, ease: 'linear' },
        });
        intervalRef.current = setInterval(() => {
            // Your repeating logic here
            setElipses((prev) => {
                if (prev.length < 3) {
                    return prev + '.';
                }
                return '';
            });
        }, 200);

        timeoutRef.current = setTimeout(() => {
            onConfirm();
            resetHold();
        }, holdDuration);
    };

    const cancelHold = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            clearInterval(intervalRef.current);
        }
        setElipses('');
        resetHold();
    };

    const resetHold = () => {
        setIsHolding(false);
        progressControls.stop();
        progressControls.set({ width: '0%' });
    };

    useEffect(() => {
        if (isHolding) {
            setText('Confirming');

        } else {
            setText('Hold to go GitHub');
        }
    }, [isHolding]);

    return (
        <div className="relative w-full h-10 mt-3 rounded-xl overflow-hidden shadow-md">
            {/* Progress Layer */}
            <motion.div
                animate={progressControls}
                className="absolute left-0 top-0 h-full bg-green-600 z-100"
                initial={{ width: '0%' }}
            >
            </motion.div>
            <motion.button
                onPointerDown={startHold}
                onPointerUp={cancelHold}
                onPointerLeave={cancelHold}
                whileTap={{ scale: 0.98 }}
                className="relative z-10 w-full h-full text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200 font-medium rounded-xl flex items-center justify-center"
            >
                <span >{text}</span>
                <span style={{ display: "absolute" }}>{elipses}</span>
            </motion.button>
        </div>
    );
}