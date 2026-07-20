import type { AppConfig } from "../shared/config";
import { createDataProvider } from "../shared/data";
import { GsapProvider } from "../shared/providers/gsap-provider";
import { MotionProvider } from "../shared/providers/motion-provider";
import type {
  AppProvider,
  ProviderProps,
} from "../shared/providers/provider.types";
import { ThemeProvider } from "../shared/providers/theme-provider";
import { createStateProvider } from "../shared/state";

export function createAppProviders(config: AppConfig): AppProvider {
  const DataProvider = createDataProvider(config.dataProvider);
  const StateProvider = createStateProvider(config.storeProvider);

  return function AppProviders({ children }: ProviderProps) {
    return (
      <GsapProvider>
        <MotionProvider>
          <ThemeProvider>
            <StateProvider>
              <DataProvider>{children}</DataProvider>
            </StateProvider>
          </ThemeProvider>
        </MotionProvider>
      </GsapProvider>
    );
  };
}
