import { useCallback, useEffect, useState } from "react"


export const useScroll = (threshold = 10, throttleMs = 100) => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
    const [lastScrollY, setLastScrollY] = useState(0);
    const handleScroll = useCallback(() => {
        //donde esta el scroll
        const currentScrollY = window.scrollY;
        //ignora movimientos muy pequeños
        if(Math.abs(currentScrollY - lastScrollY) < 5) return;

        //detectar direccion
        if (currentScrollY > lastScrollY && currentScrollY > 100){
            setScrollDirection('down')
        } else{
            if (currentScrollY < lastScrollY) {
                setScrollDirection('up')
            }
        } 

        //detectar si esta scrolleando - paso el limite de 10px?
        setIsScrolled(currentScrollY > threshold)
        //guardar la posicion actual para la proxima ves
        setLastScrollY(currentScrollY)

    },[threshold, lastScrollY])

    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if(!ticking){
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                })
                ticking = true
            }
        }
        window.addEventListener('scroll', onScroll, {passive: true})

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [handleScroll])

    //final
    return {
        isScrolled,
        scrollDirection,
        scrollY: lastScrollY
    }
}