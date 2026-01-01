import { useCallback, useEffect, useRef, useState } from 'react';

export const useCountdown = (seconds = 0) => {
    const [countdown, setCountdown] = useState(seconds);

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const restartCountdown = useCallback(() => {
        setCountdown(seconds);

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }, [seconds]);

    useEffect(() => {
        restartCountdown();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [restartCountdown]);

    return { countdown, restartCountdown };
};
