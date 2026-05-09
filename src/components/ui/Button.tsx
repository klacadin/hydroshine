import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center gap-2 rounded-md bg-hydro-blue px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-hydro-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hydro-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));

Button.displayName = "Button";
