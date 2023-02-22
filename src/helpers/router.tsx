import { NextRouter } from "next/router";
export const Switch = (link: string, router: NextRouter): Promise<Boolean> => {
  return router.push(`/${link}`);
};
