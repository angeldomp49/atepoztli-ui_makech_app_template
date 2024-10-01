import {IOCContainer} from "@makechtec/ioc-container/dist/core/IOCContainer";
import "./index.scss";
import {PROVIDERS} from "../providers/providers";
import {UIDrawer} from "./app/ui/UIDrawer";
import {setGlobalLanguge, setLanguageDefinitions} from "@makechtec/i18/dist/globals";
import {TRANSLATIONS} from "../lang/translations";
import {setGlobalContainer} from "./app/commons/globalContainer";

const globalIOCContainer: IOCContainer = new IOCContainer();

globalIOCContainer.addAllProviderConfigurations(PROVIDERS);

globalIOCContainer.bootSingletons();

setGlobalContainer(globalIOCContainer);

const uiDrawer: UIDrawer = globalIOCContainer.getInstanceByIdentifier("uidrawer");

setGlobalLanguge("es_MX");
setLanguageDefinitions(TRANSLATIONS)

uiDrawer.startUI();
