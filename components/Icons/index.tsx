import React, { useCallback, lazy } from "react";

export default function Icon({ name }: { name: string }) {
  const Icon = useCallback((name: string) => {
    try {
      const icon = lazy(() => import(`./stock/${name}`));

      return icon;
    } catch {
      //
    }

    return <></>;
  }, []);

  return <>{Icon(name)}</>;
}
