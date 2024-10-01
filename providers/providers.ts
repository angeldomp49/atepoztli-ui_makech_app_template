import {ProviderConfiguration} from "@makechtec/ioc-container/dist/core/types";
import {UIDrawer} from "../src/app/ui/UIDrawer";

export const PROVIDERS: ProviderConfiguration[] = [
    {
        serviceProvider: container => {
            return new UIDrawer(container);
        },
        providerFeatures: {
            scope: "application",
            identifier: "uidrawer",
            dependencies: []
        }
    }

];