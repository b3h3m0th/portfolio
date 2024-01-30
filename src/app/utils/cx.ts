/**
 * Takes in CSS classes as strings or objects and returns a filtered concated classnames
 * @param {(string | Record<PropertyKey, boolean>)[]} ...classes - CSS classes
 */
export const cx = (...classes: (string | Record<PropertyKey, boolean>)[]) =>
  classes
    .map((value) => {
      if (typeof value === "string") return value;
      else {
        const activeClasses = Object.keys(value).reduce((property, active) => {
          if (value[active]) property[active] = value[active];
          return property;
        }, {} as Record<string, boolean>);

        return Object.keys(activeClasses).join(" ");
      }
    })
    .join(" ");
