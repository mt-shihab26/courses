import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

export const init = () => {
    Sentry.init({
        dsn: "https://a7ecab9d9f5345ab8ce3fa9f260fda2a@o4503983016443904.ingest.sentry.io/4503983021293568",
        integrations: [new BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
};

export const log = error => {
    Sentry.captureException(error);
};
