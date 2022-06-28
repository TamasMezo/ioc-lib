import { Module } from "./types";

/**
    * @desc Class modifier which is able to inject a low-level class into the higher-level class.
    * @param modules are the dependencies which should be injected. 
    * @example  @InjectDependency([ExampleClass])
**/
export const InjectDependency = (injectables: Array<Module>) => {
    return (container: any) => {
        injectables.forEach((injectable: any) => {
            return typeof injectable === 'function' 
            ? container.prototype[injectable.name] = new injectable()
            : injectable.prototype[injectable.constructor.name] = injectable;
        });
    };
}
