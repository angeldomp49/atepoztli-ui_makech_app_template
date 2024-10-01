import {IOCContainer} from "@makechtec/ioc-container/dist/core/IOCContainer";

let globalContainer: IOCContainer = new IOCContainer();
export const setGlobalContainer = (container: IOCContainer) => globalContainer = container;
export const getGlobalContainer = (): IOCContainer => globalContainer;
