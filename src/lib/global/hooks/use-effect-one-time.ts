import { DependencyList, EffectCallback, useEffect, useRef } from "react";

// Prevent multiple runs on useEffect
export function useEffectOneTime(effect: EffectCallback, deps: DependencyList) {
    const hasRun = useRef(false);

    useEffect(() => {
        if (!hasRun.current) {
            hasRun.current = true;
            return effect();
        }
    }, deps);
}
