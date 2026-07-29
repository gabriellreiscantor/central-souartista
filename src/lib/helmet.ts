/**
 * CJS/ESM interop wrapper for react-helmet-async.
 * The package ships CommonJS; importing named exports directly breaks
 * during SSR module evaluation ("Named export not found"). Import the
 * namespace and unwrap the default when present.
 */
import * as ReactHelmetAsync from "react-helmet-async";

type RHA = typeof ReactHelmetAsync;

const rha = ((ReactHelmetAsync as unknown as { default?: RHA }).default ??
  ReactHelmetAsync) as RHA;

export const Helmet = rha.Helmet;
export const HelmetProvider = rha.HelmetProvider;
